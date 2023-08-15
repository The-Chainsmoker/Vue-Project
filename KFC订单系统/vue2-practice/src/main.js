import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
// 适配所有屏幕
import 'lib-flexible/flexible'

import {
  Button,
  Form,
  Field,
  Popup,
  Tabbar,
  TabbarItem,
  Icon,
  Search,
  Swipe,
  SwipeItem,
  NavBar,
  Stepper,
  GoodsAction,
  GoodsActionButton,
  GoodsActionIcon,
  Tab,
  Tabs,
  Checkbox,
  CheckboxGroup,
  Lazyload,
  SubmitBar,
  Toast,
  Tag,
  AddressList,
  AddressEdit,
  cell

} from 'vant';
import 'vant/lib/index.css';

Vue.use(cell);
Vue.use(AddressEdit);
Vue.use(AddressList);
Vue.use(Tag);
Vue.use(Toast);
Vue.use(SubmitBar);
Vue.use(Lazyload);
//弹出层
Vue.use(Popup);
// 表单
Vue.use(Form);
Vue.use(Field);
Vue.use(Button);
//Tabbar
Vue.use(Tabbar);
Vue.use(TabbarItem);
// 图标
Vue.use(Icon);
// 搜索框
Vue.use(Search);
// 轮播图
Vue.use(Swipe);
Vue.use(SwipeItem);
// NavBar 导航栏
Vue.use(NavBar);
// Stepper 步进器 商品数量变化
Vue.use(Stepper);
// Tab 标签页 (详情评价)
Vue.use(Tab);
Vue.use(Tabs);
// 购物车栏
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);

Vue.use(Checkbox);
Vue.use(CheckboxGroup);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

console.dir(Vue)
