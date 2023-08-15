import {request} from "@/network/request";

export function getMv(keywords,type){
    return request({
        url:'/search',
        params:{
            keywords,type
        }
    })
}
//视频信息
export function getMvData(mvid){
    return request({
        url:'/mv/detail',
        params:{
            mvid
        }
    })
}
// 视频mp4
export function getMvUrl(id){
    return request({
        url:'/mv/url',
        params:{
            id
        }
    })

}
//视频模糊搜索
export function getSearch(keywords){
    return request({
        url:'/cloudsearch',
        params:{
            keywords,
            type:1004
        }
    })

}
