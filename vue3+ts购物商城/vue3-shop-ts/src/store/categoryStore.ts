
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis'

/* const useCategoryStore = defineStore('category', {
    state: () => ({
        name:'smokers'
    }),
    actions: {
        async categoryList() {
            const res = await getCategoryAPI()
            return res.result
        }
    }
})
export default  useCategoryStore */

import { ref } from 'vue'
import { InitData, type getCategory } from '@/type/layout'
export const useCategoryStore = defineStore('categoryStore', () => {
    /**
     * categoryList直接绑定到视图层,
     * 初始值为空数组,
     * 当 getCategory 函数被调用, categoryList(响应式属性) 赋予值并更新视图层
    */
    const categoryList = ref(new InitData().getCategoryList)

    async function getCategory() {
        const res: any = await getCategoryAPI()
        console.log(res);
        categoryList.value = res.result
    }

    return { categoryList,getCategory }
})
