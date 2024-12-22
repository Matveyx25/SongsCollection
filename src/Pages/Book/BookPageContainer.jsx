import { SongPage } from '../SongPage/SongPage';
import { useQuery } from '@tanstack/react-query';

export const BookPageContainer = () => {
	const { data: song} = useQuery({queryKey: ['song']})

	return (
		<SongPage song={song}/>
	)
}