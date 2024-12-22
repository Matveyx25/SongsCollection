import { useQuery } from '@tanstack/react-query'
import { songsAPI } from '../api/api'

export const useGetSongs = (params) => {
	return useQuery({
		queryKey: ['songs', params], 
		queryFn: songsAPI.getAllSongs,
		select: data => data.data
	})
}