export const state = () => (
  {
    isActive: false
  }
)
export const mutations = {
  setIsActive (state, payload) {
    state.isActive = payload
  }
}
export const actions = {
  updateIsActive ({ commit }, bool) {
    commit('setIsActive', bool)
  }
}
