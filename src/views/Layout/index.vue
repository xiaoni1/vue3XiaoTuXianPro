<script setup>
    import LayoutHeaderVue from "./components/LayoutHeader.vue";
    import LayoutNavVue from "./components/LayoutNav.vue";
    import LayoutFooterVue from "./components/LayoutFooter.vue"
    import LayoutFixedVue from "./components/LayoutFixed.vue"

    // 触发获取导航列表的action
    import { useCategoryStore } from '@/stores/category'
    import { onMounted } from 'vue'

    const categoryStore = useCategoryStore()

    onMounted(()=> categoryStore.getCategory() )
</script>

<template>
<div>
    <LayoutFixedVue />
    <LayoutNavVue />
    <LayoutHeaderVue />
    <RouterView />
    <LayoutFooterVue />
</div>
</template>