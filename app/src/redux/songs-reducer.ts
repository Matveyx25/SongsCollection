import { Dispatch } from "redux"
import { songsAPI } from "../api/api"

const SET_SONGS = 'SET_SONGS'
const SET_SONGS_NUMS = 'SET_SONGS_NUMS'
const SET_SONG = 'SET_SONG'
const SET_COLLECTIONS = 'SET_COLLECTIONS'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
    songs: [] as Array<SongType>,
    songsNums: [] as Array<number>,
    song: {} as SongType,
    collections: [] as Array<ThemeType>,
    isFetching: false
}

export type InitialStateType = typeof initialState

const songsReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case SET_SONGS:
            return { ...state, songs: action.songs}
        case SET_SONGS_NUMS:
            return { ...state, songsNums: action.songsNums}
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

type ActionsType = setSongsActionType | setSongsNumsActionType | 
setSongActionType | setCollectionsActionType | toggleIsFetchingActionType

type DispatchType = Dispatch<ActionsType>

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
type setSongsNumsActionType = {
    type: typeof SET_SONGS_NUMS,
    songsNums: Array<number> 
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
export const setSongsNums = (songsNums: Array<number>): setSongsNumsActionType => ({ type: SET_SONGS_NUMS, songsNums })
export const setSong = (song: SongType): setSongActionType => ({ type: SET_SONG, song})
export const setCollections = (collections: Array<ThemeType>): setCollectionsActionType => ({ type: SET_COLLECTIONS, collections })
export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingActionType => ({ type: TOGGLE_IS_FETCHING, isFetching })

// THUNKs

export const requestSongs = () => {
    return async (dispatch: DispatchType) => {
        dispatch(toggleIsFetching(true))

        let response = await songsAPI.getAllSongs()        

        dispatch(setSongs(response.data))
        dispatch(toggleIsFetching(false))
    }
}

export const requestThemeSongs = (themeId: number) => {
    return async (dispatch: DispatchType) => {
        dispatch(toggleIsFetching(true))

        let response = await songsAPI.getThemeSongs(themeId)

        dispatch(setSongsNums(response.data.song_nums.length ? response.data.song_nums.split(',') : []))
        dispatch(toggleIsFetching(false))
    }
}

export const requestThemeSongsContain = (themeId: string) => {
    return async (dispatch: DispatchType) => {
        dispatch(toggleIsFetching(true))

        let response = await songsAPI.getAllSongs()
        let data = (<any>Object).values(response.data)

        let songs: Array<SongType> = data.filter((song: any) => song.theme?.includes(themeId))
        console.log(songs);
        
        dispatch(setSongs(songs))
        dispatch(toggleIsFetching(false))
    }
}

export const requestSong = (songId: number) => async (dispatch: DispatchType) => {
    dispatch(toggleIsFetching(true))
    let response = await songsAPI.getSong(songId)

    let arrRequest: SongType = response.data[Object.keys(response.data)[0]]

    dispatch(setSong(arrRequest))
    dispatch(toggleIsFetching(false)) 
}



export const requestCollections = () => async (dispatch: DispatchType) => {
    dispatch(toggleIsFetching(true))
    let response = await songsAPI.getAllTheme()
    dispatch(setCollections(response.data))
    dispatch(toggleIsFetching(false))
}


export const addCollection = (obj: ThemeType) => (dispatch: DispatchType) => {
    dispatch(toggleIsFetching(true))
    songsAPI.addNewCollection(obj).then((response: any) => {
        console.log(response.data);
    }).catch(function (error: any) {
          console.log(error);
      });
    dispatch(toggleIsFetching(false))
}

export const addToCollection = (id: number, obj: string) => (dispatch: DispatchType) => {
    dispatch(toggleIsFetching(true))    
    songsAPI.addToCollection(id, obj).then((response: any) => {
        console.log(response.data);
    }).catch(function (error: any) {
          console.log(error);
      });
    dispatch(toggleIsFetching(false))
}

export const addSong = (obj: any) => (dispatch: DispatchType) => {
    dispatch(toggleIsFetching(true))
    songsAPI.addNewSong(obj).then((response: any) => {
        console.log(response.data);
    }).catch(function (error: any) {
        console.log(error);
    });
    dispatch(toggleIsFetching(false))
}


export default songsReducer