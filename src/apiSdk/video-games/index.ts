import axios from 'axios';
import queryString from 'query-string';
import { VideoGameInterface, VideoGameGetQueryInterface } from 'interfaces/video-game';
import { GetQueryInterface } from '../../interfaces';

export const getVideoGames = async (query?: VideoGameGetQueryInterface) => {
  const response = await axios.get(`/api/video-games${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createVideoGame = async (videoGame: VideoGameInterface) => {
  const response = await axios.post('/api/video-games', videoGame);
  return response.data;
};

export const updateVideoGameById = async (id: string, videoGame: VideoGameInterface) => {
  const response = await axios.put(`/api/video-games/${id}`, videoGame);
  return response.data;
};

export const getVideoGameById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/video-games/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteVideoGameById = async (id: string) => {
  const response = await axios.delete(`/api/video-games/${id}`);
  return response.data;
};
