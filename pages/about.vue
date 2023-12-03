<template>
  <div>
    <h2>
      About {{ store.count }} / {{ store.getCount }}
      <v-btn color="indigo" rounded @click="increment">
        <v-icon>mdi-plus-circle</v-icon>
      </v-btn>
    </h2>
    <p class="text">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus vel, ut
      optio neque, nobis qui officia consequatur corrupti eum in iusto
      reiciendis asperiores sequi quisquam fugit quos ducimus? Illum, provident?
    </p>
    <p>API response:</p>
    <div>{{ data }}</div>
  </div>
</template>

<script setup>
import '~/assets/css/tailwind.css'
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter'

definePageMeta({
  middleware: 'auth',
})

const color = ref('red')

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
/*@import url('~/assets/css/tailwind.css');*/

h2 {
  margin-bottom: 20px;
  font-size: 36px;
}

p {
  margin: 20px 0;
}

.text {
  color: v-bind(color);
}
</style>
