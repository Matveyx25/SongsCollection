import { songsAPI } from "../api/api"

const SET_SONGS = 'SET_SONGS'
const SET_SONG = 'SET_SONG'
const SET_COLLECTIONS = 'SET_COLLECTIONS'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
    songs: [] as Array<SongType>,
    song: {} as SongType,
    collections: [] as Array<ThemeType>,
    isFetching: false
}

export type InitialStateType = typeof initialState

const songsReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {

    switch (action.type) {
        case SET_SONGS:
            return { ...state, songs: action.songs}
        case SET_SONG:
            return { ...state, song: action.song}
        case SET_COLLECTIONS:
            return { ...state, collections: action.collections}
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching}
        default:
            return state
    }
}

export type SongType = {
    authors?: string,
    en_name?: string,
    name: string,
    num: number | null,
    text: string | null,
    theme: string | null,
}

export type ThemeType = {
    id: number,
    song_nums: string,
    theme: string
}

// ACTION CREATOR TYPE

type setSongsActionType = {
    type: typeof SET_SONGS,
    songs: Array<SongType>
}
type setSongActionType = {
    type: typeof SET_SONG,
    song: SongType
}
type setCollectionsActionType = {
    type: typeof SET_COLLECTIONS,
    collections: Array<ThemeType>
}
type toggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING,
    isFetching: boolean
}

// ACTION CREATOR

export const setSongs = (songs: Array<SongType>): setSongsActionType => ({ type: SET_SONGS, songs })
export const setSong = (song: SongType): setSongActionType => ({ type: SET_SONG, song})
export const setCollections = (collections: Array<ThemeType>): setCollectionsActionType => ({ type: SET_COLLECTIONS, collections })
export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingActionType => ({ type: TOGGLE_IS_FETCHING, isFetching })

// THUNK

export const requestSongs = () => {
    return async (dispatch: any) => {
        dispatch(toggleIsFetching(true))

        let response = await songsAPI.getAllSongs()        

        dispatch(setSongs(response.data))
        dispatch(toggleIsFetching(false))
    }
}

export const requestThemeSongs = (themeId: number) => {
    return async (dispatch: any) => {
        dispatch(toggleIsFetching(true))

        let response = await songsAPI.getThemeSongs(themeId)
        
        dispatch(setSongs(response.data))
        dispatch(toggleIsFetching(false))
    }
}

export const requestSong = (songId: number) => async (dispatch: any) => {
    dispatch(toggleIsFetching(true))
    let response = await songsAPI.getSong(songId - 1)

    dispatch(setSong(response.data))   
    dispatch(toggleIsFetching(false)) 
}

export const requestCollections = () => async (dispatch: any) => {
    dispatch(toggleIsFetching(true))
    let response = await songsAPI.getAllTheme()

    dispatch(setCollections(response.data.features))
    dispatch(toggleIsFetching(false))
}

export const addSong = (obj: any) => (dispatch: any) => {
    dispatch(toggleIsFetching(true))
    songsAPI.addNewSong(obj).then((response: any) => {
        console.log(response.data);
    }).catch(function (error: any) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
    
      });
    
    dispatch(toggleIsFetching(false))
}


export default songsReducer