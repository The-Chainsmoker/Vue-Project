export interface consumeData {
    allTotal: number | string, //所有消费笔数
    effectiveTotal: number | string,//有效消费笔数
    bonousTotal: number | string, //银联一码付优惠消费笔数
    effectiveNum: number | string,//有效消费元
    currentRank: number | string,//当前排名
    afterRankNum: number | string,//排名后的人数
    firstConsumNum: number | string//排名第一消费笔数   
}

export interface queryData {
    transCode: string,
    mobileNo: string
}


export class InitData {
    consumeData: consumeData = {
        allTotal:'',
        effectiveTotal: '',
        bonousTotal:'',
        effectiveNum: '',
        currentRank: '',
        afterRankNum: '',
        firstConsumNum: ''
    }

    applyShow: Boolean = true
}