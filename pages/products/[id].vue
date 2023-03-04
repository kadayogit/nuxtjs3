<template>
<!-- use here productdetail component -->
<ProductDetails :product="product"/>
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

// if product has not value redirect error page
if (!product.value) {
    throw createError({statusCode: 404, statusMessage: "Product not found!", fatal: true})
}

</script>

    
<style>

</style>
