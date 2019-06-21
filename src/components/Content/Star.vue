<template>
  <div class="star">
	<Row type="flex">
		<i-col  class="col-4" span="4">

			<Menu style="padding: 50px 0;" width="auto" :theme="bg" active-name="3-1" @on-select="linkto"  :open-names="['3']" ref='menu' >
					<MenuItem  :name='0' to='/header'><Icon type="md-menu" /><span id="first-span">首页</span></MenuItem>
				 <Submenu name='1'  >
				<template slot="title">
			   <Icon type="ios-document-outline" />
			<span>数据管理</span>
			</template>
			<MenuItem name='1-1' to="/user">用户列表</MenuItem>
			<MenuItem name='1-2' to="/store">商家列表</MenuItem>
			<MenuItem name='1-3' to="/food">食品列表</MenuItem>
			<MenuItem name='1-4' to='/order'>订单列表</MenuItem>
			<MenuItem name='1-5' to='/admin'>管理员列表</MenuItem>
			</Submenu>
					 <Submenu name='2'  >
				<template slot="title">
			   <Icon type="md-add" />
			<span>添加数据</span>
			</template>
			<MenuItem name='2-1' to='/addstore'>添加商铺</MenuItem>
			<MenuItem name='2-2' to='/addgoods'>添加商品</MenuItem>
			
			</Submenu>
					 <Submenu name='3'  >
				<template slot="title">
			   <Icon type="md-star" />
			<span>图表</span>
			</template>
			<MenuItem name='3-1' to='/star'>用户分布</MenuItem>
			</Submenu>
				 <Submenu name='4'  >
				<template slot="title">
			   <Icon type="md-create" />
			<span>编辑</span>
			</template>
			<MenuItem name='4-1' to='/edit'>文本编辑</MenuItem>
			</Submenu>
			 <Submenu name='5'  >
				<template slot="title">
			   <Icon type="md-settings" />
			<span>设置</span>
			</template>
			<MenuItem name='5-1' to='setting'>管理员设置</MenuItem>
			</Submenu>
			<Submenu name='6'  >
				<template slot="title">
			   <Icon type="md-information-circle" />
			<span>说明</span>
			</template>
			<MenuItem name='6-1' to='/explain'>说明</MenuItem>
			</Submenu>
				</Menu>
		</i-col>
	
		<i-col span="20" class="col-8">
			<header>
				
			<Breadcrumb separator="<b class='demo-breadcrumb-separator'>=></b>">
				
				<BreadcrumbItem>首页</BreadcrumbItem>
				<BreadcrumbItem>图表</BreadcrumbItem>
				<BreadcrumbItem>用户分布</BreadcrumbItem>
				
			</Breadcrumb>
			<div class="demo-avatar">
				<Badge  :count="99" >
					<Dropdown trigger="click">
					<Avatar href="javascript:void(0)" size="large" :style="{background:color}">{{user}}</Avatar>
						<DropdownMenu slot="list">
							<router-link to='/login'><DropdownItem>切换登陆</DropdownItem></router-link>
							<router-link to="/registe"><DropdownItem>注册</DropdownItem></router-link>
							<router-link to="/setting"><DropdownItem>账号设置</DropdownItem></router-link>
							<router-link to="/"><DropdownItem>退出登陆</DropdownItem></router-link>
						</DropdownMenu>
					</Dropdown>
					</Badge>
					<Button size="small" @click="handleChange">更换头像</Button>
				</div>
			</header>
			<card>
			<footer>
				<ve-pie :data="address" style="margin-top: 50px;"></ve-pie>
			</footer>
			</card>
		</i-col>
	</Row>
	
  </div>
</template>

<script>
	import axios from 'axios'
	  const Userlist=['U','luck','jack'];
	const Colorlist=['#f56a00', '#7265e6', '#ffbf00'];
export default {
  name: 'star',
  data () {
	 

    return {
			
			orgOptions:{},
			bg:'dark',
			user:Userlist[0],
			color:Colorlist[0],
			value:false,
			address:{
				columns:['地区','访问用户'],
				rows:[
					{'地区':'北京','访问用户':30000},
					{'地区':'上海','访问用户':15000},
					{'地区':'深圳','访问用户':15000},
					{'地区':'杭州','访问用户':10000},
					{'地区':'其他','访问用户':100000},
				]
			}
  }
 

	  
  },
	methods:{
		linkto:function(name){
			console.log(name)
		this.$router.push(name);
		},
		handleChange:function(){
			const index=Userlist.indexOf(this.user);
			this.user=index<Userlist.length-1?Userlist[index+1]:Userlist[0];
			this.color=index<Colorlist.length-1?Colorlist[index+1]:Colorlist[0];
		},
		
	},
	
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped >
	
	.col-4{
		min-height: 100vh;
		background: #002752;
	}

	#first-span{
		margin-left: 8px;
	}
	.ivu-menu-submenu{
		margin: 10px 0;
	}
	.col-8{}
	header{
		width: 100%;
		height: 8vh;
		background: rgba(0,0,0,.1);
	}
	 .ivu-breadcrumb {
		display: inline-block;
		line-height: 8vh;
		margin-left: 10px;
	}
	.demo-avatar{
		display: inline-block;
		float: right;
		margin-top: 15px;
		margin-right: 20px;
		cursor: pointer;
		
	}
	.demo-avatar Button{
		margin: 0 5px 0 20px; 
	}
	/deep/.demo-breadcrumb-separator{
		color: #ff5500;
		padding: 0 5px;
	}
	
</style>
