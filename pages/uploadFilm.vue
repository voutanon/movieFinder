<template>
  <h1 class="text-3xl">Add Your Film:</h1>
  <el-form class="mt-2 flex flex-col gap-y-2" :model="form">
    <el-input v-model="form.Title" placeholder="Set title..." />
    <el-input type="number" v-model="form.Year" placeholder="Set year..." />
    <el-input v-model="form.imdbID" placeholder="Set imdbID..." />
    <el-upload
      ref="upload"
      class="upload-demo"
      :limit="1"
      :on-change="handlePosterChange"
    >
      <template #trigger>
        <el-button type="primary">Select poster</el-button>
      </template>
      <template #tip>
        <div class="el-upload__tip text-red">
          Upload poster
        </div>
      </template>
    </el-upload>
    <el-button class="w-max" @click="saveFilm" type="primary">SAVE</el-button>
  </el-form>
  <h2 class="mt-4 text-xl">FILMS:</h2>
  <ul>
    <li v-if="!films.length">Empty...</li>
    <li v-else v-for="(film, index) of films" :key="film.imdbID">{{ ++index + ') ' + film.Title }}</li>
  </ul>
</template>
<script setup lang="ts">
  import { genFileId } from 'element-plus'
  import { useStore } from '@/store/index'
  import { useFilmsStore } from '@/store/films'
  import type { UploadInstance, UploadProps, UploadRawFile } from 'element-plus'

  const { setAlert } = useStore()
  const { addFilm, getFilms } = useFilmsStore()
  const films = computed(() => getFilms)

  const form = reactive({
    Title: null,
    Year: null,
    imdbID: null,
    Poster: null,
  })

  const upload = ref<UploadInstance>()
  const handlePosterChange: UploadProps['onChange'] = (files) => {
    const file = files.raw as UploadRawFile
    file.uid = genFileId()
    form.Poster = file
  }

  const saveFilm = () => {
    if(Object.values(form).some(value => !value)) {
      setAlert('Please, fill every field', 'error')
    } else {
      addFilm({...form})
      form.Title = null
      form.Year = null
      form.imdbID = null
      form.Poster = null
      upload.value!.clearFiles()
      setAlert('Success', 'success')
    }
  }
</script>