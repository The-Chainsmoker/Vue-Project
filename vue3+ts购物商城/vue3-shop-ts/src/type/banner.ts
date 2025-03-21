export type bannerInfo = {
    hrefUrl: string,
    id: string,
    imgUrl: string,
    type:string
}

export class InitData {
    getBannerList: Array<bannerInfo> = []
}