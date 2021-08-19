/* eslint-disable no-useless-catch */
/* eslint-disable no-unused-vars */

export const MutationsList = {
  SET_ASIDE_DATA: 'SET_ASIDE_DATA',
}

export const ActionsList = {
  GET_ASIDE_DATA: 'SET_ASIDE_DATA',
}

export const state = () => ({
  asideData: {},
})

export const mutations = {
  [MutationsList.SET_ASIDE_DATA]: (state, value) => (state.asideData = value),
}
