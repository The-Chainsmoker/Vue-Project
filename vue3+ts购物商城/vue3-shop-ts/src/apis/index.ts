import httpInstance from '@/utils/http'

/* 定义接口 数据格式 */
interface TtypeAPI<T> {
    result: T,
    msg: string | null,
    code: number
}

/* 定义类型 Promise统一返回格式 ==> axios 接受数据统一格式 */
type Res<T> = Promise<TtypeAPI<T>>

export function getCategoryAPI(): Res<Array<null>> {
    return httpInstance({
        url: '/home/category/head'
    })
}

export function getBannerAPI(): Res<Array<null>> {
    return httpInstance({
        url: '/home/banner'
    })
}

export function getNewAPI(): Res<Array<null>> {
    return httpInstance({
        url: '/home/new'
    })
}

