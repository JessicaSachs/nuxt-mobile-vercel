<script setup lang="ts">

export type DropEventValues = [File[] | null, DragEvent]
export type DropzoneEmits = {
  drop: DropEventValues // named tuple syntax
}

const emit = defineEmits<DropzoneEmits>()

const dropZoneRef = ref<HTMLDivElement>()

const { isOverDropZone } = useDropZone(dropZoneRef, {
  onDrop: (files, event) => {
    if (!files) {
      console.error(`There are no files. This may be related to the open VueUse issue here https://github.com/vueuse/vueuse/issues/3573`)
    }
    emit('drop', files, event)
  }
})

</script>

<template>
  <div ref="dropZoneRef"
    class="flex border-2 hover:cursor-pointer hover:border-indigo-500 focus:border-indigo-500 border-dashed border-indigo-300 min-h-300px max-w-full min-w-[80%] my-4 items-center justify-center text-center rounded-xl">
    {{ isOverDropZone ? 'Hovering, broh' : 'Drag me, plzzzzzz' }}
  </div>
</template>
