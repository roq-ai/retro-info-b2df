import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { authorizationValidationMiddleware, errorHandlerMiddleware } from 'server/middlewares';
import { videoGameValidationSchema } from 'validationSchema/video-games';
import { convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  switch (req.method) {
    case 'GET':
      return getVideoGames();
    case 'POST':
      return createVideoGame();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getVideoGames() {
    const data = await prisma.video_game
      .withAuthorization({
        roqUserId,
        tenantId: user.tenantId,
        roles: user.roles,
      })
      .findMany(convertQueryToPrismaUtil(req.query, 'video_game'));
    return res.status(200).json(data);
  }

  async function createVideoGame() {
    await videoGameValidationSchema.validate(req.body);
    const body = { ...req.body };
    if (body?.price_history?.length > 0) {
      const create_price_history = body.price_history;
      body.price_history = {
        create: create_price_history,
      };
    } else {
      delete body.price_history;
    }
    const data = await prisma.video_game.create({
      data: body,
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(authorizationValidationMiddleware(handler))(req, res);
}
