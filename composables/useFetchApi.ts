import { useStore } from '@/store/index'

export const useFetchApi = (path: string, query = {}, method = 'GET') => {
  const runtimeConfig = useRuntimeConfig()
  const baseURL = runtimeConfig.public.API_URL
  query.apikey = runtimeConfig.public.API_KEY

  const apiPath = baseURL + path
  return useFetch(apiPath, {
    method,
    query,
  }).then(res => {
    const { setAlert } = useStore()
    if (res.error.value) {
      setAlert(res.error.value.data.Error, 'error')
    }
    return res
  }).catch(err => console.error(err))
}