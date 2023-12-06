<template>
  <div>
    <NuxtLayout>
      <h2>{{ error.statusCode }}</h2>
      <button @click="handleError">Clear errors</button>
    </NuxtLayout>
  </div>
</template>

<script setup>
const props = defineProps({
  error: Object,
})

const handleError = () => clearError({ redirect: '/' })
</script>
