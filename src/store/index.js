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
                id: 26243686,
            }],
            playListIndex: 0,
        }
    },
})

export default store