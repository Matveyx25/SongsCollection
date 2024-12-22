import { useMutation, QueryClient } from '@tanstack/react-query'
import { songsAPI } from '../api/api'

export const useAddCollection = () => {
	const queryClient = new QueryClient()
	
	return useMutation({
    mutationFn: (data) => songsAPI.addNewCollection(data),
    onSuccess: () => {
      queryClient.invalidateQueries(['themes']);
    },
  });
}