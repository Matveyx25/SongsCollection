import axios from 'axios';

const instance = axios.create({
    // baseURL : 'http://213.139.208.216:5000' 
    // apiKey: "AIzaSyA73kt8GIlxafwzBFjqoMSZd_-3Te-OdyA",
    baseURL: "https://songscollection-a32c7-default-rtdb.firebaseio.com/",
    headers: {
        "API-KEY": "AIzaSyA73kt8GIlxafwzBFjqoMSZd_-3Te-OdyA"
    }
})

export const songsAPI = { 
    getAllSongs(){
        return instance.get(`songs.json`)
    },
    getSong(songId){
        return instance.get(`songs.json?orderBy=\"num\"&equalTo=${songId}`)
    },
    getSongFromText(text){
        return instance.get(`songs.json?filter=${text}`)
    },
    addNewSong(obj){
        return instance.post(`songs.json`, obj)
    },
    addToCollection(id, obj){
        return instance.patch(`themes/${id}/.json`, {"song_nums": obj})
    },
    addNewCollection(obj){
        return instance.post(`themes.json`, obj)
    },
    getAllTheme(){
        return instance.get(`themes.json`)
    },
    getThemeSongs(themeId){
        return instance.get(`themes/${themeId}.json`)
    },
    getThemeSongsContain(theme){
        return instance.get(`songs.json?orderBy=\"theme\"&equalTo=${theme}`)
    }
}

export const securityAPI = {
    getCaptcha () { 
        return instance.get(`security/get-captcha-url`)
    }
}