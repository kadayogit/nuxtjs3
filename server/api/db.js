export default defineEventHandler(async (event) => {
//handle query params
// const { name } = getQuery(event)

// api call with private key
const { data } = await $fetch('http://api.currencyapi.com/v3/latest?apikey=fB9yYwA3jx7Jcu5Smlk8KfFyH0Ea5ZwmnJ0maYOM')

    return data
})
