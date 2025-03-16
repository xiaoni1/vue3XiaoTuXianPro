<script setup>
    import LayoutHeaderVue from "./components/LayoutHeader.vue";
    import LayoutNavVue from "./components/LayoutNav.vue";
    import LayoutFooterVue from "./components/LayoutFooter.vue"
</script>

<template>
<div>
    <LayoutHeaderVue />
    <LayoutNavVue />
    <RouterView />
    <LayoutFooterVue />
</div>
</template>