<script setup lang="ts">
import type { DropEventValues } from './components/Dropzone.vue';
import Dropzone from './components/Dropzone.vue';

const filesIJustUploaded: Ref<unknown> = ref()
const handleOnDrop = async (files: DropEventValues[0]) => {
  if (!files) {
    debugger
    return
  }

  const formData = new FormData();
  for (const file of files) {
    formData.append('files', file)
  }

  filesIJustUploaded.value = await $fetch('/api/upload', {
    method: 'post',
    headers: [['content-type', 'multipart/form-data']],
    body: formData
  })
}
</script>

<template>
  <main class="relative m-12">
    <h1>Working w/ UploadThing ServerSDK + Nuxt</h1>
    <h2 class="text-red-500 font-bold">VueUse has a <NuxtLink href="https://github.com/vueuse/vueuse/issues/3573">bug
      </NuxtLink> on MacOS right now. Only drop files from external applications.</h2>
    <div class="border-1">{{ filesIJustUploaded }}</div>
    <Dropzone @drop="handleOnDrop"></Dropzone>
    <ImageList />
  </main>
</template>

<style>
html,
body {
  max-width: 100dvw;
  max-height: 100dvh;
  overflow-y: scroll;
  margin: 0;
  padding: 0;
}

body,
main {
  @apply font-sans;
}

h1 {
  @apply text-xl;
}

h2 {
  @apply text-lg;
}
</style>
