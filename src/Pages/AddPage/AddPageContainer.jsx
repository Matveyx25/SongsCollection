import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useGetSongs } from '../../hooks/useSongs';
import { useCollections } from '../../hooks/useCollections';
import { useAddToCollection } from '../../hooks/useAddToCollection';
import { useAddSong } from '../../hooks/useAddSong';

export const AddPageContainer = () => {
    const { register, handleSubmit, reset } = useForm();
		const {data: dataSongs} = useGetSongs()
		const {data: collections} = useCollections()
		const {mutate: addToCollection} = useAddToCollection()
		const {mutate: addSong} = useAddSong()

    const onSubmit = data => {
        // const songs = Object.values(dataSongs)
        // let num = songs[songs.length - 1].num + 1
        // const obj = {
        //     name: data.name,
        //     enName: data.enName,
        //     altName: null,
        //     text: data.text,
        //     authors: data.authors,
        //     theme: data.themes.join(','),
        //     num: num
        // }
        // for(let el of data.themes){
        //     const key = Object.keys(collections).find(key => {
        //         return collections[key].theme === el
        //     });
				// 		response.data.song_nums.length ? response.data.song_nums.split(',') : []
        //     addToCollection(key, [..., num+""].join(','))
        // }
        // addSong(obj)
        // reset()
    }

    useEffect(() => {
        document.getElementById('textbox').addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                e.preventDefault();
                let start = this.selectionStart;
                let end = this.selectionEnd;
                this.value = this.value.substring(0, start) +
                "\t" + this.value.substring(end);
                this.selectionStart =
                this.selectionEnd = start + 1;
            }else if(e.keyCode === 13){
                e.preventDefault();
                let start = this.selectionStart;
                let end = this.selectionEnd;
                this.value = this.value.substring(0, start) +
                "\n" + this.value.substring(end);
                this.selectionStart =
                this.selectionEnd = start + 1;
            }
        });
      return () => {
        
      };
    })

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='themes-wrapper'>
                        {collections.map((theme, index) => (
                            <div>
                                <input type="checkbox" id={`theme${index}`} name='theme' {...register("themes", {})} value={theme.theme}/>
                                <label htmlFor={`theme${index}`}>{theme.theme}</label>
                            </div>
                        ))}
                    </div>
                    <div className="search-wrapper">
                        <input type="text" placeholder="название песни" {...register("name")}/>
                    </div>
                    <div className="search-wrapper">
                        <input type="text" placeholder="song name" {...register("enName")}/>
                    </div>
                    <div className="search-wrapper">
                    <textarea placeholder="текст песни" id="textbox" {...register("text")}/>
                    </div>
                    <div className="search-wrapper">
                        <input type="text" placeholder="автор песни" {...register("authors")}/>
                    </div>

                    <button className="add-song" type="submit">сохранить</button>
            </form>
        </div>
    )
}