import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: [],
  },
  mutations: {
    ADD_ARTICLE(state, payload){
      state.articles.push(payload)
      console.log(state.articles)
    },
  },
  actions: {
    addArticle(context, payload) {
      context.commit('ADD_ARTICLE', payload)
    },
  },
  modules: {
  },
  getters: {
    Article(state) {
      return state.articles
    }
  },
})
