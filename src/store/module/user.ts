import { UserInfoData } from '@/interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
// import * as LoginApi from '@/api/login'

// state
const state: UserInfoData = {
  token: 'token',
  userInfo: {}
}

// getter
const getters: GetterTree<UserInfoData, any> = {
  UserInfo: (state: UserInfoData) => state.userInfo,
  token: (state: UserInfoData) => state.token
}

// mutations
const mutations: MutationTree<UserInfoData> = {
  UPDATE_LOGININFO_STATE(state: UserInfoData, data: UserInfoData) {
    state.userInfo = { ...data }
    return state
  }
}
// actions
const actions: ActionTree<UserInfoData, any> = {
  loginInfoChange({ commit, state: UserInfoData }, data: UserInfoData) {
    commit('UPDATE_LOGININFO_STATE', data)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
