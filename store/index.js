export const state = () => ({
  showDropDown: false,
})

export const getters = {
  GET_SHOWDROPDOWN(state) {
    return state.showDropDown
  },
}

export const mutations = {
  SET_SHOWDROPDOWN(state, payload) {
    if (!payload) {
      setTimeout(() => (state.showDropDown = payload), 10)
    } else {
      state.showDropDown = payload
    }
  },
}

export const actions = {
  DISPATCH_SHOWDROPDOWN({ commit }, payload) {
    commit('SET_SHOWDROPDOWN', payload)
  },
}
