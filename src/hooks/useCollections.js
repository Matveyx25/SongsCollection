import { useQuery } from '@tanstack/react-query'
import { songsAPI } from '../api/api'

export const useCollections = () => {
	return useQuery({
		queryKey: ['themes'],
		queryFn: songsAPI.getAllTheme,
		select: data => data.data
	})
}