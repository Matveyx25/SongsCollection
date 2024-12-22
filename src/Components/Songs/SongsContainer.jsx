import { Songs } from './Songs'
import { Preloader } from '../common/preloader/preloader'
import { useGetSongs } from '../../hooks/useSongs'
import { useState } from 'react'
import { IconChevronDown } from '@tabler/icons-react'
import s from './Song.module.css'
import classNames from 'classnames'

export const SongsContainer = ({searchValue}) => {
	const {data: songs, isFetching} = useGetSongs()
	const [filterHide, setFilterHide] = useState(true);

  const [searchFields, setSearchFields] = useState(["name", "text", "authors"]);

	return (
		<>
			<div className={s.filterWrapper}>
					<div className={s.filterHeader} onClick={() => {
						setFilterHide(prev => !prev)
					}}>
						Фильтры
						<IconChevronDown className={classNames(s.filterChevron, filterHide ? '' : s.active)}/>
					</div>
					{!filterHide && <div className={s.filtersList}>
						Искать по:
						{["name", "text", "authors"].map((el) => (
							<button
								className={classNames(
									s.filterButton,
									searchFields.includes(el) ? s.active : ""
								)}
								onClick={() => {
									if(searchFields.includes(el)){
										setSearchFields(prev => [...prev].filter(_ => _ !== el))
									}else{
										setSearchFields(prev => [...prev, el])
									}
								}}
							>
								{{ name: "Название", text: "Текст", authors: "Автор" }[el]}
							</button>
						))}
					</div>}
				</div>
			{isFetching ? <Preloader/> : <Songs {...{searchValue, searchFields, songs}}/>}
		</>
	)
}