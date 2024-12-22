import { getDatabase, ref } from "firebase/database";

const database = getDatabase();

export const songsAPI = { 
    getAllSongs(){
        return ref(database, 'songs')
    },
    getSong(songId){
        return ref(database, `songs?id=${songId}`)
    },
    getSongFromText(text){
        return ref(database, `songs?filter=${text}`)
    },
    // addNewSong(obj){
    //     return instance.post(`songs/add`, obj)
    // },
    getAllTheme(){
        return ref(database, `themes`)
    },
    getThemeSongs(themeId){
        return ref(database, `songs/${themeId}`)
    }
}
