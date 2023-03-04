<template>
<div>
  <h1 class="container mx-auto text-center text-9xl mt-7">{{ error.statusCode }}</h1>
  <p class="text-6xl text-center font-semibold mt-7">Ooops...</p>
  <p class="text-center mt-7 text-lg"> {{ error.message }}</p>
</div>
</template>

<script setup>
// create props for error page using defineProps function
defineProps(['error'])
</script>

<style scoped>

</style>
