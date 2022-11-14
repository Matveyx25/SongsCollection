import * as axios from 'axios'

const instance = axios.create({
    // baseURL : 'http://213.139.208.216:5000' 
    apiKey: "AIzaSyA73kt8GIlxafwzBFjqoMSZd_-3Te-OdyA",
    baseURL: "https://songscollection-a32c7-default-rtdb.firebaseio.com/",
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

export const authAPI = {
    me () { return instance.get(`auth/me`) },
    login (email , password , rememberMe = false,
         captcha = null){return instance.post(`auth/login`,
          {email , password , rememberMe, captcha})},
    logout (){return instance.delete(`auth/login`)}
}
export const securityAPI = {
    getCaptcha () { 
        return instance.get(`security/get-captcha-url`)
    }
}