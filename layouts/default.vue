<template>
<!-- header menu -->
<header>
    <nav>
        <NuxtLink to="/">Online Shopping</NuxtLink>
        <ul>
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
    </nav>
</header>

<!-- output here page contents using slot -->
<div>
    <slot />
</div>
</template>
