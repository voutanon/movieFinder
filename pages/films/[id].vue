<template>
  <h1 class="text-3xl text-center">{{ data.Title }}</h1>
  <div class="mt-4 flex flex-col items-center">
    <img :src="data.Poster" alt="Poster" class="h-[400px]">
    <ul class="text-center">
      <li>{{ data.Year }}</li>
      <li>{{ data.Director }}</li>
    </ul>
  </div>
</template>
<script setup>
  import { useGetFilm } from '~/composables/useFilms';
  import { useStore } from '@/store/index'

  const { setAlert } = useStore()
  const { params } = useRoute()
  const { data } = await useGetFilm(params.id)
  
  if (data.value?.Error) {
    setAlert(data.value?.Error, 'error')
    await navigateTo({
      path: '/',
    })
  }
</script>