import { IconCopy } from "@tabler/icons-react";
import s from "./SongPage.module.scss";
import { toast } from "react-toastify";

export const SongPage = ({ song }) => {
	const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
				toast.success('Скопировалось с кайфом')
      })
      .catch(err => toast.error('Чет пошло не по плану...'));
  };



  if (song?.num) {
    return (
      <div>
				<div className={s.header}>
					<h1 className={s.title}>
						{song.num}. {song.name}
					</h1>
					<button className={s.copyBtn} onClick={handleCopyLink}><IconCopy/></button>
				</div>
        <pre className={s.text}>{song.text}</pre>
        {song.authors && <small className={s.author}>{song.authors}</small>}
      </div>
    );
  } else {
    return (
      <div>
        <h1 className={s.mute}>Песня не выбрана</h1>
      </div>
    );
  }
};