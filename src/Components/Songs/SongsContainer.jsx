import { Songs } from './Songs'
import { Preloader } from '../common/preloader/preloader'
import { useGetSongs } from '../../hooks/useSongs'

export const SongsContainer = ({searchValue}) => {
	const {data: songs, isFetching} = useGetSongs()

	return (
		<>
			{isFetching ? <Preloader/> : <Songs songs={songs} searchValue={searchValue}/>}
		</>
	)
}