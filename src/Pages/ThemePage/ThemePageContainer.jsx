import { Songs } from '../../Components/Songs/Songs'
import { useThemeSongs } from '../../hooks/useThemeSongs'
import { Preloader } from '../../Components/common/preloader/preloader'
import { useParams } from 'react-router-dom'

export const ThemePageContainer = () => {
	const {themeId} = useParams()
	const {data: songs, isFetching} = useThemeSongs(themeId)

	return (
		<>
			{isFetching ? <Preloader /> : <Songs songs={songs}/>}
		</>
	)
}