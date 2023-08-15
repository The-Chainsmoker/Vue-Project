export interface ListInt {
  userId: number,
  id: number,
  title: string,
  introduce: string
}
//条件查询
interface selectDataInt {
  title: string,
  introduce: string,
  page: number,//页码(当前页)
  count: number,//总条数
  pagesize: number//默认一页显示几条
}

//展示的数据
export class InitData {
  //查询数据
  selectData: selectDataInt = {
    title: '',
    introduce: '',
    page: 1,
    count: 0,
    pagesize: 5
  }
  list: ListInt[] = []
}
