import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userId:'',
    gameList:[]
  },
  mutations: {
    addGame: (state, payload) => {
      state.gameList.push(payload);
    },
    removeGame: (state, payload) => {
      state.gameList = state.gameList.filter( game => game.id !== payload)
    },
    UserId: (state, payload) => {
      state.userId = payload;
    },
    GameList: (state, payload) => {
      state.gameList = payload;
    }
  },
  actions: {
    addGameToList: ({ commit }, payload) => {
      commit('addGame', payload);
    },
    removeGameFromList: ({ commit }, payload) => {
      commit('removeGame', payload);
    },
    setUserId: ({ commit }, payload) => {
      commit('UserId', payload);
    },
    setGameList: ({ commit }, payload) => {
      commit('GameList', payload);
    }
  },
  modules: {
  }
})
