import Login from './components/Login.vue'
import Registe from './components/Registe.vue'
import Index from './components/Index.vue'
import Bg from './components/Bg.vue'
import MyHeader from './components/MyHeader.vue'
import User from './components/Content/User.vue'
import Store from './components/Content/Store.vue'
import Food from './components/Content/Food.vue'
import Order from './components/Content/Order.vue'
import Admin from './components/Content/Admin.vue'
import AddStore from './components/Content/AddStore.vue'
import AddGoods from './components/Content/AddGoods.vue'
import Star from './components/Content/Star.vue'
import Edit from './components/Content/Edit.vue'
import Setting from './components/Content/Setting.vue'
import Explain from './components/Content/Explain.vue'
export default
[
	{path:'/login',component:Login},
	{path:'/registe',component:Registe},
	{path:'/index',component:Index},
	{path:'/',component:Bg},
	{path:'/header',component:MyHeader},
	{path:'/user',component:User},
	{path:'/store',component:Store,name:'store',},
	{path:'/food',component:Food},
	{path:'/order',component:Order},
	{path:'/admin',component:Admin},
	{path:'/addstore',component:AddStore,name:'addstore'},
	{path:'/addgoods',component:AddGoods},
	{path:'/star',component:Star},
	{path:'/edit',component:Edit},
	{path:'/setting',component:Setting},
	{path:'/explain',component:Explain},
	
]