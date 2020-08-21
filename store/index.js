const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=cd4f5454&type=movie&s='

export const state = () => ({
  searchResults: [],
  searchError: ''
})

export const actions = {
  async search ({ commit }, keyword) {
    const url = `${API_URL}${keyword}`
    const response = await fetch(url)
    const data = await response.json()

    if (data.Error) {
      commit('SET_SEARCH_RESULTS', [])
      commit('SET_SEARCH_ERROR', data.Error)
    } else {
      commit('SET_SEARCH_RESULTS', data.Search)
      commit('SET_SEARCH_ERROR', '')
    }

    return data.Search
  }
}

export const mutations = {
  SET_SEARCH_RESULTS (state, data) {
    state.searchResults = data
  },

  SET_SEARCH_ERROR (state, data) {
    state.searchError = data
  }
}

export const getters = {
  searchResults (state) {
    return state.searchResults
  },

  searchError (state) {
    return state.searchError
  }
}
