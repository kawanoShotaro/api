import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import {UPDATE_CURRENT,UPDATE_BOOK} from '@/src/store/mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  strict:true,
  state: {
    books:[],
    current:null
  },
  getters:{
    bookCount(state){
      return state.books.length
    },
    allBooks(state){
      return state.books
    },
    getRangeByPage(state){
      return page => {
        const SIZE = 3
        return state.books.slice((page - 1)*SIZE,(page - 1)*SIZE + SIZE)
      }
    },
    getBookById(state){
      return id => {
        return state.books.find(book => book.id === id)
      }
    },
    current(state){
      return state.current;
    }
  },
  mutations: {
    [UPDATE_CURRENT](state,payload){
      state.current = payload
    },
    [UPDATE_BOOK](state,payload){
      let b = this.getters.getBookById(payload.id)
      if(b){
        Object.assign(b,payload)
      }else{
        state.books.push(payload)
      }
    }
  },
  actions: {
    [UPDATE_CURRENT]({commit},payload){
      commit(UPDATE_CURRENT,payload)
    },
    [UPDATE_BOOK]({commit},payload){
      commit(UPDATE_BOOK,payload)
    }
  },
  plugins: [createPersistedState({
    key:'reading-recorder',
    strage:localStorage
  })]
})
