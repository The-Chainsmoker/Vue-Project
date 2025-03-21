export interface goodInfo {
    desc: string,
    id: string,
    name: string,
    orderNum: string,
    picture: string,
    price: string
}

export interface getCategory {
    id: string,
    name: string,
    children?: Array<getCategory>
    goods?: goodInfo[]
}

export class InitData {
    getCategoryList: Array<getCategory> = []
}