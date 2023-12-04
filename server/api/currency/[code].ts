export default defineEventHandler(async (event) => {
  const params = event.context.params
  const code = (params as any).code
  const { currencyKey } = useRuntimeConfig()

  const uri = `https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${currencyKey}`

  const response = await $fetch(uri).catch((error) => error.data)
  return response
})
