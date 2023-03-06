<template>
<h2>About</h2>
<p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae culpa repudiandae quis soluta, placeat quidem atque omnis nulla eos? Quo, non? Quisquam quasi ratione libero eos eveniet amet harum debitis!
</p>
<div>
<li>{{ data }}</li>
</div>
</template>

<script setup>
//get api connection from server side
const { data } = await useFetch('/api/db')
console.warn(data)
</script>

<style>

</style>
