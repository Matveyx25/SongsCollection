import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { addSong, requestCollections, requestSongs, addToCollection, requestThemeSongs } from '../../redux/songs-reducer'
import { getCollections, getSongs } from '../../redux/songs-selectors';

const AddAPIComponent = props => {
    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        props.requestSongs()
        props.requestCollections()
    }, [])

    const reload = () => {
        props.requestSongs()
    }

    const onSubmit = data => {
        const songs = Object.values(props.songs)
        let num = songs[songs.length - 1].num + 1
        const obj = {
            name: data.name,
            enName: data.enName,
            altName: null,
            text: data.text,
            authors: data.authors,
            theme: data.themes.join(','),
            num: num
        }
        for(let el of data.themes){
            const key = Object.keys(props.collections).find(key => {
                return props.collections[key].theme === el
            });
            props.requestThemeSongs(key)
            props.addToCollection(key, [...props.songsNums, num+""].join(','))
        }
        props.addSong(obj)
        reset()
        reload()
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
                        {props.collections.map((theme, index) => (
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

const mapStateToProps = (state) => ({
    collections: getCollections(state),
    songs: getSongs(state),
    songsNums: state.songsPage.songsNums
})

const AddPageContainer = connect(mapStateToProps, { addSong, addToCollection, requestCollections, requestSongs, requestThemeSongs })(AddAPIComponent)

export default AddPageContainer