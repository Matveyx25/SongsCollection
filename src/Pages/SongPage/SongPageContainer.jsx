import { SongPage } from './SongPage'
import { Preloader } from '../../Components/common/preloader/preloader'
import { useSongById } from '../../hooks/useSongById'
import { useParams } from 'react-router-dom';

export const SongPageContainer = () => {
	const { songId } = useParams()
	const { data: song, isFetching } = useSongById(songId)

	return (
		<>
			{isFetching ? <Preloader /> : <SongPage song={song} />}
		</>)
}