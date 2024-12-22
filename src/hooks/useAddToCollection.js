import { useMutation, QueryClient } from '@tanstack/react-query'
import { songsAPI } from '../api/api'

export const useAddToCollection = () => {
	const queryClient = new QueryClient()
	
	return useMutation({
    mutationFn: (id, data) => songsAPI.addToCollection(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries(['themes']);
    },
  });
}