<template>
<h2 class="text-2xl font-semibold mb-2">{{ product.title }}</h2>
<p><img src="" alt=""></p>
<p>{{ product.description}}</p>
<p>{{ product.price }}</p>
<p>{{ product.rating.rate}}</p>
</template>

    
<script setup>
const { id } = useRoute().params
definePageMeta({
    layout: 'products'
})

// create url fetching data
const url = 'https://fakestoreapi.com/products/' + id;

// create fetch data from API
const { data: product } = await useFetch(url);

</script>

    
<style>

</style>
