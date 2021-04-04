import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true, 
    baseURL : 'https://social-network.samuraijs.com/api/1.0/', // need change base url 
    headers: {"API-KEY" : "b93c13bf-3a25-43aa-aa7b-bce3a68057ff"} // and apikey if you have it 
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    getUnFollow(userId){
        return instance.delete(`follow/${userId}`)
    },
    getFollow(userId){
        return instance.post(`follow/${userId}`)
    },
    getProfile(userId){
        return profileAPI.getProfile(userId)
    },
}

export const songsAPI = { // all quesion about songs and songs collection
    getAllSongs(){
        return instance.get(`songs`)
    },
    getSong(songId){
        return instance.get(`songs?id=${songId}`)
    },
    getSongFromText(text){
        return instance.get(`songs?filter=${text}`)
    },
    getAllTheme(){
        return instance.get(`themes`)
    },
    getThemeSongs(themeId){
        return instance.get(`songs/${themeId}`)
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