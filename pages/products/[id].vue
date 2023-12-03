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
    // Check if the id is made up of digits
    return /^\d+$/.test(route.params.id)
  },
})

const { id } = useRoute().params
const uri = 'https://fakestoreapi.com/products/' + id

//  fetch the products
const { data: product } = await useFetch(uri, { key: id })

if (!product.value) {
  throw createError({ statusCode: 404, statusMessage: 'Product not found' })
}

definePageMeta({
  layout: 'products',
})
</script>

<style scoped></style>
