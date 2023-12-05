import { defineStore } from 'pinia'

export const useFilmsStore = defineStore('films-store', {
  state: () => ({
    films: [],
  }),
  actions: {
    setFilms(films) {
      this.films = films
    },
    addFilm(film) {
      this.films.push(film)
    },
  },
  getters: {
    getFilms: (state) => state.films
  }
})
