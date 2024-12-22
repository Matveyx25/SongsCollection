import { useQuery } from '@tanstack/react-query'
import { songsAPI } from '../api/api'

export const useSongById = (id) => {
	return useQuery({
		queryKey: ['song', id],
		queryFn: () => songsAPI.getSong(id),
		select: data => data.data[Object.keys(data.data)[0]]
	})
}