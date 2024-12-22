import { useQuery } from '@tanstack/react-query'
import { songsAPI } from '../api/api'

export const useThemeSongs = (id) => {
	return useQuery({
		queryKey: ['songs', {themeId: id}],
		queryFn: () => songsAPI.getThemeSongs(id),
		select: data => data.data
	})
}