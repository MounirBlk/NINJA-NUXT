<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="(p, i) in products" :key="i">
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>

<script setup>
//  fetch the products
const { data: products } = await useFetch(
  'https://fakestoreapi.com/products',
).catch((error) => error.data)

definePageMeta({
  layout: 'products',
})

useHead({
  title: 'Nuxt Dojo | Merch',
  meta: [{ name: 'description', content: 'Nuxt 3 Merch' }],
})

/* useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css',
    },
  ],
}) */
</script>

<style scoped></style>
