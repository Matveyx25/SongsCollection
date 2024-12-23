import { useState } from 'react';
import { SongsContainer } from '../../Components/Songs/SongsContainer'
import { useForm } from 'react-hook-form';

export const HomePage = () => {
    const { register, handleSubmit } = useForm();
    const [value, setValue] = useState('')

    const onSubmit = (data) => {
        setValue(data.search)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="search-wrapper">
                        <input type="text" placeholder="поиск песен" {...register("search")}/>
                        <button className="submit" type="submit">
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.66 21.6141L19.7915 16.7464C19.5717 16.5267 19.2739 16.4046 18.9613 16.4046H18.1654C19.5131 14.6812 20.314 12.5134 20.314 10.1553C20.314 4.54545 15.7678 0 10.157 0C4.54623 0 0 4.54545 0 10.1553C0 15.7651 4.54623 20.3105 10.157 20.3105C12.5156 20.3105 14.6837 19.5098 16.4074 18.1623V18.9581C16.4074 19.2706 16.5295 19.5684 16.7493 19.7881L21.6178 24.6558C22.0768 25.1147 22.8191 25.1147 23.2732 24.6558L24.6551 23.2741C25.1141 22.8152 25.1141 22.073 24.66 21.6141ZM10.157 16.4046C6.70459 16.4046 3.90654 13.612 3.90654 10.1553C3.90654 6.70345 6.69971 3.90587 10.157 3.90587C13.6094 3.90587 16.4074 6.69856 16.4074 10.1553C16.4074 13.6071 13.6143 16.4046 10.157 16.4046Z" fill="#0F0F0F" />
                            </svg>
                        </button>
                    </div>
            </form>
           <SongsContainer searchValue={value}/>
        </div>
    )
}