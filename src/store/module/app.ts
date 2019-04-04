import { AppInfo } from '@/types/app.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'

const state: AppInfo = {
  menu: []
}

// 强制使用getter获取state
const getters: GetterTree<AppInfo, any> = {
  state: (state: AppInfo) => state
}

// 更改state
const mutations: MutationTree<AppInfo> = {
  // 更新state都用该方法
  UPDATE_STATE(state: AppInfo, data: AppInfo) {
    return data || state
  }
}

const actions: ActionTree<AppInfo, any> = {
  UPDATE_APPINFO_ASYN({ commit, state: AppInfo }, data: AppInfo) {
    commit('UPDATE_STATE', data)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
