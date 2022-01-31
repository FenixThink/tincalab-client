export const state = () => ({
  customers: [],
  projects: [],
  feedbacks: [],
  services: [],
  microservices: [],
  blogs: [],
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
  async getBlogs({commit, state}, _) {
    if (!state.blogs.length) {
      const {data} = await this.$axios.get('blogs')
      commit('SET_LIST', {
        field: 'blogs',
        data,
      })
    }
  },

  async getServices({commit, state}, _) {
    if (!state.services.length) {
      const {data} = await this.$axios.get('services')
      commit('SET_LIST', {
        field: 'services',
        data,
      })
    }
  },
  async getMicroservices({commit, state}, _) {
    if (!state.microservices.length) {
      const {data} = await this.$axios.get('microservices')
      commit('SET_LIST', {
        field: 'microservices',
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
