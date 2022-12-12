import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            playList: [{
                al: {
                    id: 2431159,
                    name: "Young And Beautiful",
                    picUrl: "http://p3.music.126.net/JfUgVJfRf87fXjR_ylhKZw==/109951163102654386.jpg",
                },
                id: 31997968,
            }],
            playListIndex: 0,
            isPlaying: false,
        }
    },

    mutations: {
        upatePlayList(state, payload) {
            state.playList = payload.playList
            state.isPlaying = false
        },

        updatePlayIndex(state, payload) {
            state.playListIndex = payload.playListIndex
        },

        updatePlay(state, payload) {
            state.isPlaying = payload.isPlaying
        }
    }
})

export default store