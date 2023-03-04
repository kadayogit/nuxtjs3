<template>
<!-- header menu -->
<header>
    <nav>
        <NuxtLink to="/products">Online Shopping</NuxtLink>
    </nav>
</header>

<!-- output here page contents using slot -->
<div>
    <slot />
</div>
<!-- footer of the product page -->
<div>
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
</div>
</template>
