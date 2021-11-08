import { songsAPI } from "../api/api"

const SET_RESULTS = 'SET_RESULTS'
const SET_SONGS = 'SET_SONGS'
const SET_SONG = 'SET_SONG'
const SET_COLLECTIONS = 'SET_COLLECTIONS'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
    songs: [],
    song: {},
    searchResults: [],
    collections: [],
    isFetching: false
}

const songsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_SONGS:
            return { ...state, songs: action.songs}
        case SET_RESULTS:
            return { ...state, searchResults: action.searchResults}
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

// ACTION CREATOR

export const setSongs = (songs) => ({ type: SET_SONGS, songs })
export const setResults = (searchResults) => ({ type: SET_RESULTS, searchResults })
export const setSong = (song) => ({ type: SET_SONG, song})
export const setCollections = (collections) => ({ type: SET_COLLECTIONS, collections })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

// THUNK

export const requestSongs = () => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))

        let response = await songsAPI.getAllSongs()

        dispatch(setSongs(response.data))
        dispatch(toggleIsFetching(false))
    }
}

export const requestThemeSongs = (themeId) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))

        let response = await songsAPI.getThemeSongs(themeId)
        
        dispatch(setSongs(response.data))
        dispatch(toggleIsFetching(false))
    }
}

export const requestSong = (songId) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    let response = await songsAPI.getSong(songId)
    
    dispatch(setSong(response.data))   
    dispatch(toggleIsFetching(false)) 
}

export const requestCollections = () => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        let response = await songsAPI.getAllTheme()
        
        dispatch(setCollections(response.data))
        dispatch(toggleIsFetching(false))
    }
}

export const requestThemes = (themeId) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))

        let response = await songsAPI.getTheme(themeId)

        dispatch(setSongs(response.data))
        dispatch(toggleIsFetching(false))
    }
}

export const searchSong = (text) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        let response = await songsAPI.getSongFromText(text)
        dispatch(setResults(response.data))
        dispatch(toggleIsFetching(false))
    }
}

export const addSong = (obj) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        let response = await songsAPI.addNewSong(obj)
        console.log(response.data);
        dispatch(toggleIsFetching(false))
    }
}


export default songsReducer