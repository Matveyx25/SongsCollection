import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { addSong } from '../../redux/songs-reducer'

const AddAPIComponent = props => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const obj = {
            name: data.name,
            enName: data.enName,
            altName: null,
            text: data.text,
            authors: data.authors,
            theme: 'Молодежное Служение'
        }
        props.addSong(obj)
    }

    useEffect(() => {
        document.getElementById('textbox').addEventListener('keydown', function(e) {
            if (e.key == 'Tab') {
                e.preventDefault();
                var start = this.selectionStart;
                var end = this.selectionEnd;
                this.value = this.value.substring(0, start) +
                "\t" + this.value.substring(end);
                this.selectionStart =
                this.selectionEnd = start + 1;
            }else if(e.keyCode == 13){
                e.preventDefault();
                var start = this.selectionStart;
                var end = this.selectionEnd;
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


const AddPageContainer = connect(null, { addSong })(AddAPIComponent)

export default AddPageContainer