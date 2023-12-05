<template>
  <h1 class="text-3xl">FILMS</h1>
  <el-carousel height="470px">
      <el-carousel-item v-for="film of getFilms" :key="film.imdbID" class="!flex items-center flex-col">
        <div @click="navigateToFilmPage(film.imdbID)">
          <img :src="film.Poster" alt="Poster" class="h-[400px]">
          <h2 class="small justify-center text-center" text="2xl">{{ film.Title }}</h2>
          <ul class="text-center">
            <li>{{ film.Year }}</li>
          </ul>
        </div>
      </el-carousel-item>
    </el-carousel>
</template>
<script setup>
  import { useStore } from '@/store/index'
  import { useFilmsStore } from '@/store/films'
  
  const { setAlert } = useStore()
  const filmsStore = useFilmsStore()
  const { getFilms } = storeToRefs(filmsStore)

  const { query } = useRoute()

  if(!getFilms.length && query?.s) {
    const filmsResult = await useGetFilms(query.s)
    if (filmsResult.data.value?.Error) {
      setAlert(filmsResult.data.value?.Error, 'error')
    } else {
      filmsStore.setFilms(filmsResult.data.value.Search)
    }
  } else {
    setAlert('Please, search film', 'warning')
    await navigateTo({
      path: '/',
    })
  }

  const navigateToFilmPage = async(filmID) => {
    await navigateTo({
      path: `/films/${filmID}`,
    })
  }
</script>