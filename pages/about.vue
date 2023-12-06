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
    <div>
      <h1>Nuxt birthday - Current color: {{ color }}</h1>
      <p>{{ date }}</p>
      <label for="locale-chooser">Preview a different locale</label>
      <select id="locale-chooser" v-model="locale">
        <option v-for="(l, i) of locales" :key="i" :value="l">
          {{ l }}
        </option>
      </select>
    </div>
    <p class="text">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus vel, ut
      optio neque, nobis qui officia consequatur corrupti eum in iusto
      reiciendis asperiores sequi quisquam fugit quos ducimus? Illum, provident?
    </p>
    <p>
      {{ formatNumber(counter) }}
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

let color = ref('red')
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
/* if (error) {
  console.log(toto)
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
  })
} */

const execute = response.execute // reload data
const refresh = response.refresh // reload data
const status = response.status // idle pending error success
pending = response.pending

const counter = useState('counter', () => Math.round(Math.random() * 1000))

const locales = useLocales()
const locale = useLocale()
const date = useLocaleDate(new Date('2016-10-26'))
color = useColor() // Same as useState('color')
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
