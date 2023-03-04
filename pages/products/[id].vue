<template>
<h2 class="text-2xl font-semibold mb-2">Product Detail for {{ id }}</h2>
<p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae culpa repudiandae quis soluta, placeat quidem atque omnis nulla eos? Quo, non? Quisquam quasi ratione libero eos eveniet amet harum debitis!
</p>
</template>

    
<script setup>
const { id } = useRoute().params
definePageMeta({
    layout: 'products'
})

</script>

    
<style>

</style>
