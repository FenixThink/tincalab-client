export const state = () => ({
  customers: [],
  projects: [],
  feedbacks: [],
})

export const actions = {
  async getCustomers({commit, state}, _) {
    if (!state.customers.length) {
      const {data} = await this.$axios.get('customers')
      commit('SET_LIST', {
        field: 'customers',
        data,
      })
    }
  },
  async getFeedbacks({commit, state}, _) {
    if (!state.feedbacks.length) {
      const {data} = await this.$axios.get('feedbacks')
      commit('SET_LIST', {
        field: 'feedbacks',
        data,
      })
    }
  },
  async getProjects({commit, state}, _) {
    if (!state.projects.length) {
      const {data} = await this.$axios.get('projects')
      commit('SET_LIST', {
        field: 'projects',
        data,
      })
    }
  },
}

export const mutations = {
  SET_LIST(state, {field, data}) {
    state[field] = data
  },
}
