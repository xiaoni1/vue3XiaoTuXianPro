// 封装分类数据业务相关代码
import { ref, onMounted } from 'vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'
import { getCategoryAPI } from '@/apis/category'


export function useCategory() {
    const categoryData = ref({})
    const route = useRoute()
    const getCategory = async(id = route.params.id) => {
        const res = await getCategoryAPI(id)
        categoryData.value = res.result
    }
    onMounted(()=>getCategory())

    // 路由参数变化的时候，分类数据接口重新请求
    onBeforeRouteUpdate((to)=>{
        getCategory(to.params.id)
    })

    return { categoryData }
}