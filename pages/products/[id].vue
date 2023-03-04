<template>
<h2>About</h2>
<h3>Product Detail for {{ id }}</h3>
<p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae culpa repudiandae quis soluta, placeat quidem atque omnis nulla eos? Quo, non? Quisquam quasi ratione libero eos eveniet amet harum debitis!
</p>
<p>
    <NuxtLink to="/">Home</NuxtLink>
</p>
</template>

    
<script setup>
const { id } = useRoute().params

</script>

    
<style>

</style>
