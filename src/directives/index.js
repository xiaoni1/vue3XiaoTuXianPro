// 监听是否进入可视区域
import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin = {
    install(app) {
        // 定义全局指令
        app.directive('img-lazy', {
            mounted (el, binding)  {
                // el: 指令绑定的那个元素img
                // binding: binding.value 指令等于号后面绑定的表达式的值，即图片url
                // console.log( el, 'binding',binding.value )
                const { stop } = useIntersectionObserver(
                    el, 
                    ([{ isIntersecting }]) =>  {
                        el.src = binding.value
                        // 停止监听
                        stop()
                    }

                )
            }
        })
    }
}