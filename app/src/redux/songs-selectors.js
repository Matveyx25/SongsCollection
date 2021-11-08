export const getResult = (state) => {
    return state.songsPage.searchResults
}

export const getSongs = (state) => {
    return state.songsPage.songs
}
export const getSong = (state) => {
    return state.songsPage.song
}
export const getCollections = (state) => {
    return state.songsPage.collections
}
export const getFetching = (state) => {
    return state.songsPage.isFetching
}
