import Collections from './Collections'
import { Preloader } from '../common/preloader/preloader'
import { useCollections } from '../../hooks/useCollections'

export const CollectionsContainer = () => {
	const {data: collections, isFetching} = useCollections()

	return <>
			{isFetching ?
					<Preloader />
					: <Collections collections={collections}/>}
	</>
}