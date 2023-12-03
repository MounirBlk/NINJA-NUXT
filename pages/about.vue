<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus vel, ut
      optio neque, nobis qui officia consequatur corrupti eum in iusto
      reiciendis asperiores sequi quisquam fugit quos ducimus? Illum, provident?
    </p>
    <p>API response:</p>
    <div>{{ data }}</div>
  </div>
</template>

<script setup>
const appConfig = useAppConfig()
// const { data } = await useFetch('/api/ninja?name=mario')
// const { data } = await useFetch('/api/ninja?name=mario', {
//   method: 'post',
//   body: {age: 30}
// })
const response = await useFetch('/api/currency/GBP')
const data = response.data
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}

p {
  margin: 20px 0;
}
</style>
