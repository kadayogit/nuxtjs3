<template>
    <div class="card">
        <div class="grid grid-cols-2 gap-10">
            <div class="p-7">
                <img :src="product.image" alt="" class="mx-auto my-7"> 
            </div>
            <div class="p-7">
                <h2 class="text-2xl font-semibold my-7">{{ product.title }}</h2>
                <p class="text-lg text-red-500 my-7">Price - ${{ product.price }}</p>
                <h2 class="font-bold border-b-2 mb-2 pb-4">Product description</h2>
                <p class="text-md my-7">{{ product.description }}</p>
                <button class="btn flex text-white">
                    <i class="material-icons mr-2">add_shopping_cart</i>
                    <span>Add to cart</span>
                </button>
            </div>

        </div>
 
    </div>
</template>

<script setup>
// get data from id page for product details
const { product } = defineProps(['product'])

</script>

<style scoped>
img {
    max-width: 350px;
}

</style>