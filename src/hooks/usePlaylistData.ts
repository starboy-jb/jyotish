
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface PlaylistInfo {
  title: string;
  description: string;
  url: string;
  songs: number;
  category: 'dance' | 'chill' | 'focus';
}

const getPlaylistInfo = async (playlistId: string) => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&id=${playlistId}&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching playlist:', error);
    return null;
  }
};

export const usePlaylistData = (playlistId: string) => {
  return useQuery({
    queryKey: ['playlist', playlistId],
    queryFn: () => getPlaylistInfo(playlistId),
  });
};
