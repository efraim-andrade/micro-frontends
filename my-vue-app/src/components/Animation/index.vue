<script setup lang="ts">
import { ref } from 'vue';

const isExpanded = ref(false);

const handleExpand = () => {
  isExpanded.value = !isExpanded.value
}
</script>

<template>
    <div className="relative rounded-md border-2 border-dashed border-green-400 p-4">
      <span className="absolute left-4 top-[-8px] rounded-sm bg-zinc-900 px-1 text-xs font-bold text-green-200">
        from: my-vue-app
      </span>

      <button
        @click="handleExpand"
        data-isExpanded="{{ isExpanded.value }}"
        :class="[
          { 'px-8': isExpanded, 'px-4': !isExpanded },
          'rounded-md bg-zinc-200 py-2 text-zinc-900 transition-all',
        ]"
      >
      Click to expand
      </button>
    </div>
</template>
