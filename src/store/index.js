import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate"

export default createStore({
    state: {
        achievements: [],
        unlock_characters: [],
        choices: [],
    },
    mutations: {
    },
    actions: {
    },
    modules: {
    },
    plugins: [createPersistedState()],
})