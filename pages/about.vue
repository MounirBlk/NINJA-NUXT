<template>
  <div>
    <h2>
      About {{ store.count }} / {{ store.getCount }}
      <v-btn color="indigo" rounded @click="increment">
        <v-icon>mdi-plus-circle</v-icon>
      </v-btn>
      <v-btn color="purple" rounded @click="refresh">
        <v-icon>mdi-refresh</v-icon>
      </v-btn>
    </h2>
    <p class="text">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus vel, ut
      optio neque, nobis qui officia consequatur corrupti eum in iusto
      reiciendis asperiores sequi quisquam fugit quos ducimus? Illum, provident?
    </p>
    <br />
    <div>{{ status ?? 'Unkown status' }}</div>
    <div v-if="pending">API PENDING</div>
    <div v-else>
      <span>API response:</span>
      <div>{{ response.data }}</div>
    </div>
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
let pending = ref(true)

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

/* const { pending, data: apiData } = await useFetch('/api/currency/GBP', {
  lazy: true,
}).catch((error) => error.data) */

/* const event = useRequestEvent()
const result = await fetchWithCookie(event, '/api/currency/GBP')
onMounted(() => console.log(document.cookie)) */

const headers = useRequestHeaders(['cookie'])
const response = await useLazyFetch('/api/currency/GBP', {
  // immediate: false,
  headers,
  watch: [count],
  pick: ['data'], // take only from response
  /* transform: (e) => {
    return e.data // take only from response
  }, */
})
const error = response.error
const execute = response.execute // reload data
const refresh = response.refresh // reload data
const status = response.status // idle pending error success
pending = response.pending
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
