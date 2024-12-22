import { useMutation, QueryClient } from '@tanstack/react-query'
import { songsAPI } from '../api/api'

export const useAddSong = () => {
	const queryClient = new QueryClient()
	
	return useMutation({
    mutationFn: (data) => songsAPI.addNewSong(data),
    onSuccess: () => {
      queryClient.invalidateQueries(['themes']);
    },
  });
}