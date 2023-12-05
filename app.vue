<template>
  <div v-loading.fullscreen.lock="getLoading" class="container mx-auto relative">
    <LayoutHeader />
    <NuxtPage />
  </div>
  <transition>
    <el-alert
      v-if="getAlert.title"
      :title="getAlert.title"
      :type="getAlert.type"
      class="!w-max min-w-[200px] max-w-[35%] !fixed bottom-4 right-4"
    />
  </transition>

</template>
<script setup>
  import { useStore } from '@/store/index'
  import { storeToRefs } from 'pinia'

  const store = useStore()
  const { getAlert, getLoading } = storeToRefs(store)
</script>
