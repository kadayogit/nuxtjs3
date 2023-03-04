<template>
<!-- header menu -->
<header class="shadow-lg bg-white">
    <nav class="container mx-auto p-4">
        <NuxtLink to="/products" class="font-bold text-lg">Products</NuxtLink>
    </nav>
</header>

<!-- output here page contents using slot -->
<div class="container mx-auto p-4">
    <slot />
</div>
<!-- footer of the product page -->
<footer class="container mx-auto p-4 flex justify-between border-t-2">
    <ul class="flex gap-4">
        <li>
            <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
            <NuxtLink to="/about">About</NuxtLink>
        </li>
        <li>
            <NuxtLink to="/products">Products</NuxtLink>
        </li>
    </ul>
</footer>
</template>
