import { VideoGameInterface } from 'interfaces/video-game';
import { GetQueryInterface } from 'interfaces';

export interface PriceHistoryInterface {
  id?: string;
  video_game_id?: string;
  price: number;
  date: any;
  created_at?: any;
  updated_at?: any;

  video_game?: VideoGameInterface;
  _count?: {};
}

export interface PriceHistoryGetQueryInterface extends GetQueryInterface {
  id?: string;
  video_game_id?: string;
}
