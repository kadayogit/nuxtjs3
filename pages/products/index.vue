<template>
<h2>Products</h2>
<div class="grid grid-cols-4 gap-5">
    <div v-for="product in products">
    <NuxtLink :to="`/products/${product.id}`">{{ product.title }}</NuxtLink>
    </div>
</div>

</template>

<script setup>
definePageMeta({
    layout: 'products'
})

// Fetch data from API using useFetch function
const { data: products } = await useFetch('https://fakestoreapi.com/products');
console.warn(products);
</script>

<style>

</style>
