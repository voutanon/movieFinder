<template>
  <el-form class="flex gap-x-4" :model="form">
    <el-input v-model="form.film" placeholder="Search by title..." />
    <el-button :disabled="getLoading" @click="searchFilms" type="primary">SEARCH</el-button>
  </el-form>
</template>
<script setup>
  import { useStore } from '@/store/index'
  import { useFilmsStore } from '@/store/films'
  import { useGetFilms } from '~/composables/useFilms';
  
  const store = useStore()
  const { setFilms } = useFilmsStore()
  const { getLoading } = storeToRefs(store)

  const form = reactive({
    film: ''
  })
  const searchFilms = async() => {
    store.setLoading(true)
    const filmsResult = await useGetFilms(form.film)
    if (filmsResult.data.value?.Error) {
      store.setAlert(filmsResult.data.value?.Error, 'error')
    } else {
      setFilms(filmsResult.data.value.Search)
      await navigateTo({
        path: '/films',
        query: {
          s: form.film,
        }
      })
    }
    store.setLoading(false)
  }
</script>
