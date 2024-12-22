import s from "./SongPage.module.scss";

export const SongPage = ({ song }) => {
  if (song?.num) {
    return (
      <div>
        <h1 className={s.title}>
          {song.num}. {song.name}
        </h1>
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