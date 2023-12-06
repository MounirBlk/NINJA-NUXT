export default defineEventHandler(async (event) => {
  // handle query params
  // const { name } = useQuery(event)

  // handle post data
  // const { age } = await useBody(event)

  // return {
  //   message: `Hello, ${name}! You are ${age} years old.`
  // }

  // api call with private key
  const { currencyKey } = useRuntimeConfig()

  const response = await $fetch(
    `https://api.currencyapi.com/v3/latest?apikey=${currencyKey}`,
  ).catch((error) => error.data)
  return response
})
