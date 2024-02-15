<script setup lang="ts">
const { data: list } = await useFetch('/api/list')

</script>

<template>
  <Suspense>
    <div class="grid-cols-2 b-1">
      <div v-for="file in list?.files" :key="file.id" class="p-1 m-1 b-1">
        <span class="break-all">{{ file.key }}</span>
        <img :src="file.url" class="max-w-300px">
      </div>
    </div>
    <template #fallback>
      Loading Images from UploadThing
    </template>
  </Suspense>
</template>
