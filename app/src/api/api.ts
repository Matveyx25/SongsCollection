import axios, { AxiosResponse } from 'axios'
import { SongType, ThemeType } from '../redux/songs-reducer'

const instance = axios.create({
    // baseURL : 'http://213.139.208.216:5000' 
    // apiKey: "AIzaSyA73kt8GIlxafwzBFjqoMSZd_-3Te-OdyA",
    baseURL: "https://songscollection-a32c7-default-rtdb.firebaseio.com/",
    headers: {
        "API-KEY": "AIzaSyA73kt8GIlxafwzBFjqoMSZd_-3Te-OdyA"
    }
})

export enum ResultCodesEnum {
    Success = 200,
    Error = 404
}

export const songsAPI = { 
    getAllSongs(){
        return instance.get(`songs.json`)
    },
    getSong(songId: number){
        return instance.get(`songs.json?orderBy=\"num\"&equalTo=${songId}`)
    },
    getSongFromText(text: string){
        return instance.get(`songs.json?filter=${text}`)
    },
    addNewSong(obj: SongType){
        return instance.post(`songs.json`, obj)
    },
    addToCollection(id: number, obj: string){
        return instance.patch(`themes/${id}/.json`, {"song_nums": obj})
    },
    addNewCollection(obj: ThemeType){
        return instance.post(`themes.json`, obj)
    },
    getAllTheme(){
        return instance.get(`themes.json`)
    },
    getThemeSongs(themeId: number){
        return instance.get(`themes/${themeId}.json`)
    },
    getThemeSongsContain(theme: string){
        return instance.get(`songs.json?orderBy=\"theme\"&equalTo=${theme}`)
    }
}

export const securityAPI = {
    getCaptcha () { 
        return instance.get(`security/get-captcha-url`)
    }
}