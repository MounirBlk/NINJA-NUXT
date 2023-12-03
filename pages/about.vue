<template>
  <div>
    <h2>
      About {{ store.count }} / {{ store.getCount }}
      <button type="button" @click="increment">+</button>
    </h2>
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
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter'
const store = useCounterStore()

const { increment } = store

const count = computed(() => store.count)
// const getCount = computed(() => store.getCount)

// const { count } = storeToRefs(store)
// const { getCount } = storeToRefs(store)

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
