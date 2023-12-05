export const useGetFilms = (searchData: string) => {
  return useFetchApi('/', { s: searchData })
}
export const useGetFilm = (searchData: string) => {
  return useFetchApi('/', { i: searchData })
}