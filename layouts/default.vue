<template>
<!-- header menu -->
<header class="shadow-lg bg-white">
    <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold text-lg hover:text-green-300">Shopping</NuxtLink>
        <ul class="flex gap-4">
            <li>
                <NuxtLink to="/" class="font-bold hover:text-green-300">Home</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/about" class="font-bold hover:text-green-300">About</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/products" class="font-bold text-white btn">Products</NuxtLink>
            </li>
        </ul>
    </nav>
</header>

<!-- output here page contents using slot -->
<div class="container mx-auto p-4">
    <slot />
</div>
</template>
