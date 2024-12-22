import { useState } from "react";
import Song from "./Song";
import s from "./Song.module.css";

const cleanText = (text) => {
	return (text + '').replace(/[.,!?;:\-\s]/g, "").toLowerCase();
};

const Filtered = ({songs, searchValue, searchFields, flag, setFlag}) => {
	const isNumeric = /^\d+$/.test(searchValue);
	const filter = isNumeric ? ['num'] : searchFields

	return Object.values(songs).map((u) => {
		let matchFound = false;
		let fields = [];

		filter.forEach((field) => {
			const value = u[field] || "";
			if (cleanText(value).includes(cleanText(searchValue))) {
				matchFound = true;
				field !== 'num' && fields.push(field);
			}
		});

		if (matchFound) {
			return (
				<Song
					song={u}
					key={u.num}
					fields={cleanText(searchValue) ? fields : []}
				/>
			);
		} else if (searchValue && flag) {
			return null; // Пропускаем элементы без совпадений
		}
	})
}

export const Songs = ({ songs, searchValue, searchFields }) => {
  const [flag, setFlag] = useState(false);

  return (
    <ul className={s.songsWrapper}>
			{!cleanText(searchValue) ? Object.values(songs).map((u) => (
				 <Song
					song={u}
					key={u.num}
					fields={[]}
				/>
			)) : <Filtered {...{songs, searchFields, searchValue, flag, setFlag}}/>}

      {searchValue && flag && (
        <span className={s.notResult}>Ничего не найдено</span>
      )}
    </ul>
  );
};
