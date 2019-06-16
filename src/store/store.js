import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        userClient: undefined,
        userSession: undefined,
    },
    mutations: {
        changeUserClient(state, userClient) {
            state.userClient = userClient
            console.log('Changing User in the store ')
            console.log(state.userClient)
        },
        changeUserSession(state, userSession) {
            state.userSession = userSession
        }
    },
    getters: {
        userClient: state => state.userClient,
        userSession: state => state.userSession,
        isUserSignedIn: state => state.userClient !== undefined
    }
})
