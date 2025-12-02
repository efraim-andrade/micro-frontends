<script setup lang="ts">
import { onMounted, ref } from 'vue'

import Animation from './components/Animation/index.vue'
import counterWrapper from 'my-react-app-1/counterWrapper'

const divRef = ref()

onMounted(() => {
  counterWrapper(divRef.value)
})
</script>

<template>
  <main className="flex h-screen flex-col items-center justify-center gap-8 bg-zinc-900 text-white">
    <h1 className="text-3xl font-bold">My Vue App</h1>
    
    <Animation />

    <div ref="divRef"></div>
  </main>
</template>
