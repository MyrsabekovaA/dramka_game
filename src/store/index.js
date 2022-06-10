import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate"

export default createStore({
    state: {
        current_card: null,
    },
    mutations: {
        setCurrCard(state, card) {
            state.current_card = card;
        }
    },
    actions: {
        setCurrCard({commit}, card) {
            commit('setCurrCard', card)
        }
    },
    getters: {
        current_card: state => state.current_card,
    },
    modules: {
    },
    plugins: [createPersistedState()],
})