import { AppStateType } from "./store"

export const getSongs = (state: AppStateType) => {
    return state.songsPage.songs
}
export const getSong = (state: AppStateType) => {
    return state.songsPage.song
}
export const getCollections = (state: AppStateType) => {
    return state.songsPage.collections
}
export const getFetching = (state: AppStateType) => {
    return state.songsPage.isFetching
}
