<template>
  <nav class="my-4">
    <ul class="flex gap-x-4 text-xl">
      <li>
        <el-button v-if="path !== '/'" @click="$router.back()">Back</el-button>
      </li>
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/uploadFilm">Add Film</NuxtLink>
      </li>
    </ul>
  </nav>
</template>
<script setup>
  const router = useRoute()
  const path = computed(() => router.path)
</script>