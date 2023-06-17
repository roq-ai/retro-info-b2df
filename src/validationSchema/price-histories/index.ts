import * as yup from 'yup';

export const priceHistoryValidationSchema = yup.object().shape({
  price: yup.number().integer().required(),
  date: yup.date().required(),
  video_game_id: yup.string().nullable(),
});
