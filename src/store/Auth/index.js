import router from '../../router'

import {
  getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'

import db from '../../firebase/firebaseInit'

export default {
  namespaced: true,
  state: {
    isLogin: false,
    currentUserData: {},
    currentUserName: '',
    currentUserId: null
  },
  actions: {
    async registerAccount ({ commit, dispatch }, { name, email, password }) {
      commit('CHANGE_ISLOADING', null, { root: true })
      const auth = getAuth()
      try {
        await createUserWithEmailAndPassword(auth, email, password)
        console.log(auth.currentUser)
        await updateProfile(auth.currentUser, { displayName: name })
        console.log('Successfully registered!')
      } catch (error) {
        console.log(error.code)
        switch (error.code) {
          case 'auth/email-already-in-use':
            alert('電子信箱已註冊')
            break
          case 'auth/invalid-email':
            alert('無效的電子信箱')
            break
          case 'auth/weak-password':
            alert('密碼安全性低')
            break
          default:
            alert('電子信箱或密碼錯誤')
        }
        return
      }
      const currentUserData = auth.currentUser
      dispatch('createNewAccountData', currentUserData)
      commit('SET_LOGIN')
      commit('SET_CURRENT_USER_DATA', currentUserData)
      commit('SET_CURRENT_USER_NAME', currentUserData.displayName)
      commit('CHANGE_ISLOADING', null, { root: true })
      router.push('/')
    },
    async signInAccount ({ commit, dispatch }, { email, password }) {
      commit('CHANGE_ISLOADING', null, { root: true })
      const auth = getAuth()
      try {
        await signInWithEmailAndPassword(auth, email, password)
        console.log('Successfully sign in!')
        console.log(auth.currentUser.displayName, '你回來了')
        console.log(auth.currentUser.uid)
      } catch (error) {
        console.log(error.code)
        switch (error.code) {
          case 'auth/invalid-email':
            alert('無效的電子信箱')
            break
          case 'auth/user-not-found':
            alert('沒有此帳戶')
            break
          case 'auth/wrong-password':
            alert('密碼錯誤')
            break
          default:
            alert('電子信箱或密碼錯誤')
            break
        }
        commit('CHANGE_ISLOADING', null, { root: true })
      }
      dispatch('Cart/clearCartList', null, { root: true })
      const currentUserData = auth.currentUser
      commit('SET_LOGIN')
      commit('SET_CURRENT_USER_DATA', currentUserData)
      commit('SET_CURRENT_USER_NAME', currentUserData.displayName)
      commit('SET_CURRENT_USER_ID', currentUserData.uid)
      dispatch('Cart/getCartList', null, { root: true })
      router.push('/')
      commit('CHANGE_ISLOADING', null, { root: true })
    },
    async signOutAccount ({ dispatch, commit }) {
      commit('CHANGE_ISLOADING', null, { root: true })
      const auth = getAuth()
      await signOut(auth)
      commit('SET_LOGIN')
      router.push('/login')
      dispatch('Cart/clearCartList', null, { root: true })
      commit('CHANGE_ISLOADING', null, { root: true })
    },
    async createNewAccountData (data) {
      const dataBase = db.collection('account').doc(data.uid)
      await dataBase.set({
        userId: data.uid,
        userName: data.displayName,
        wishList: []
      })
    }
  },
  mutations: {
    SET_LOGIN (state) {
      state.isLogin = !state.isLogin
    },
    SET_CURRENT_USER_DATA (state, data) {
      state.currentUserData = data
    },
    SET_CURRENT_USER_NAME (state, data) {
      state.currentUserName = data
    },
    SET_CURRENT_USER_ID (state, id) {
      state.currentUserId = id
    }
  },
  getters: {
    isLogin (state) {
      return state.isLogin
    },
    currentUserData (state) {
      return state.currentUserData
    },
    currentUserName (state) {
      return state.currentUserName
    },
    currentUserId (state) {
      return state.currentUserId || ''
    }
  }
}
