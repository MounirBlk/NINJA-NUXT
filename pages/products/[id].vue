<template>
  <div>
    <Head>
      <Title>Nuxt Dojo | {{ product.title }}</Title>
      <Meta name="description" :content="product.description" />
    </Head>
    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
definePageMeta({
  validate: (route) => {
    return /^\d+$/.test(route.params.id) // Check if the id is made up of digits
  },
})

const route = useRoute()
useHead({
  meta: [{ property: 'og:title', content: `App Name - ${route.meta.title}` }],
})

const { id } = useRoute().params
const uri = 'https://fakestoreapi.com/products/' + id

//  fetch the products
const { data: product } = await useFetch(uri, { key: id }).catch(
  (error) => error.data,
)

if (!product.value) {
  throw createError({ statusCode: 404, statusMessage: 'Product not found' })
}

definePageMeta({
  layout: 'products',
})
</script>

<style scoped></style>
