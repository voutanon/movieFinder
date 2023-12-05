import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => ({
    loading: false,
    titleAlert: null,
    typeAlert: null,
  }),
  actions: {
    setAlert(message: string & null, type: string & null) {
      this.titleAlert = message
      this.typeAlert = type
      setTimeout(() => {
        this.titleAlert = null
        this.typeAlert = null
      }, 5000)
    },
    setLoading(mode: boolean) {
      this.loading = mode
    }
  },
  getters: {
    getAlert(state) {
      return {
        title: state.titleAlert,
        type: state.typeAlert
      }
    },
    getLoading: (state) => state.loading
  }
})
