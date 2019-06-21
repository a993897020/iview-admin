<template>
  <div class="addgoods">
	<Row type="flex">
		<i-col  class="col-4" span="4">

			<Menu style="padding: 50px 0;" width="auto" :theme="bg" active-name="2-2" @on-select="linkto"  :open-names="['2']" ref='menu' >
					<MenuItem  :name='0' to='/header' ><Icon type="md-menu" /><span id="first-span">首页</span></MenuItem>
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
				<BreadcrumbItem>添加数据</BreadcrumbItem>
				<BreadcrumbItem>添加商品</BreadcrumbItem>
				
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
				<Form ref="food" :model="food" :label-width='100' :rules="imports" style="width: 1200px;margin: 0 auto;">
					<h2 style="text-align: center;margin: 10px 0;">选择食品种类</h2>
					<FormItem label="食品种类">
						<Select>
							<Option v-for="item in items" :value="item.value" :key="item.value" >{{item.label}}</Option>
						</Select>
					</FormItem>
						<Collapse v-model="expand" style="border: 0; background: #fff;">
					<Panel name="show"  style="text-align: center;" >
						添加食品种类
						<FormItem slot="content" label="食品种类" >
							<Input   v-model="food.classify"></Input>
						</FormItem>
						<FormItem  slot="content" label="种类描述">
							<Input  v-model="food.information"></Input>
						</FormItem>
						<FormItem slot="content">
							<Button type="primary" style="text-align: right;">确认添加食品</Button>
						</FormItem>
					</Panel>
					</Collapse>
					<h2 style="text-align: center;margin: 10px 0;">选择食品种类</h2>
					<FormItem label="食品名称" prop="name">
						<Input v-model="food.name"></Input>
					</FormItem>
					<FormItem label="食品活动">
						<Input v-model="food.active"></Input>
					</FormItem>
					<FormItem label="食品详情">
						<Input v-model="food.introduction"></Input>
					</FormItem>
					<FormItem label="上传图片">
						<Upload multiple type="drag" action="">
							<div style="padding: 20px 0;">
								<icon type="ios-cloud-upload" size="52" style="color: #3399ff;"></icon>
								<p>点击或拖拽即可上传</p>
							</div>
						</Upload>
					</FormItem>
					<FormItem label="食品特点">
						<Select multiple>
							<Option v-for="trait in traits" :value="trait.value" :key="trait.value">{{trait.label}}</Option>
						</Select>
					</FormItem>
					<FormItem label="食品规格" >
						<RadioGroup v-model="number" @on-change="Ropen">
						<Radio label="single"  ><span>单规格</span></Radio>
						<Radio label="more"  ><span>多规格</span></Radio>
						</RadioGroup>
					</FormItem>
					<div v-if='this.ishid'>
					<FormItem label="包装费" >
						<InputNumber :max='100' :min='0' v-model="food.bzf"></InputNumber>
					</FormItem>
					<FormItem label="价格" >
						<InputNumber :max='100' :min='0' v-model="food.jg"></InputNumber>
					</FormItem>
					</div>
					<div v-else='!this.ishid'>
					<FormItem style="text-align: center;" >
						<Button type="primary" @click="Mopen=true">添加规格</Button>
						<Modal v-model="Mopen" title="添加规格" @on-ok="ok" @on-cancel="cancel">
							<Form :label-width="100">
							<FormItem label="规格">
								<Input v-model="food.gk"></Input>
							</FormItem>
							<FormItem label="包装费">
								<InputNumber :max='100' :min='0' v-model="food.bzf"></InputNumber>
							</FormItem>
							<FormItem label="价格">
								<InputNumber :max='100' :min='0' v-model="food.jg"></InputNumber>
							</FormItem>
							</Form>
						</Modal>
					</FormItem>
					<FormItem >
						<Table :columns="title" :data="content">
							<template slot-scope="{row,index}" slot="action">
								<Button type="error" @click="remove(index)">删除</Button>
							</template>
						</Table>
					</FormItem>
					</div>
					<FormItem>
						<router-link to='/food'><Button type="primary" @click="add">确认添加食品</Button></router-link>
					</FormItem>
				</Form>
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
  name: 'addgoods',
  data () {
	 

    return {
			
			orgOptions:{},
			bg:'dark',
			user:Userlist[0],
			color:Colorlist[0],
			value:false,
			expand:'1',
			food:{
				name:'',
				active:'',
				classify:'',
				information:'',
				introduction:'',
				gk:'',
				bzf:0,
				jg:20,
			},
			items:[{value:'bg',label:'饼干'},
					{value:'tg',label:'糖果'},
					{value:'yb',label:'月饼'},
					{value:'yt',label:'油条'},
					{value:'dj',label:'豆浆'},
					{value:'dxm',label:'刀修面'},
					{value:'ldg',label:'驴打滚'},
					{value:'zz',label:'粽子'},
					{value:'jz',label:'饺子'},
					],
			imports:{
				name:[{required:true,message:'请输入食品名称',trigger:'blur'}]
			},
			traits:[{value:'xp',label:'新品'},{value:'zp',label:'招牌'}],
			number:'single',
			ishid:true,
			title:[
				{title:"规格",key:"kg"},
				{title:"包装费",key:"bzf"},
				{title:"价格",key:"jg"},
				{title:"操作",key:"cz",slot:"action"}
			],
			content:[
				{kg:'默认',bzf:0,jg:20},
			],
			Mopen:false,
			
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
		remove(index){
			this.content.splice(index,1)
		},
		ok(){
			if(this.food.gk==''){
				this.$Message.error('确认失败');
			}else{
			this.$Message.success('添加成功');
			this.content.push({kg:this.food.gk,bzf:this.food.bzf,jg:this.food.jg})
			}
		},
		cancel(){
			this.$Message.info('取消')
		},
		Ropen(){
			if(this.number=='single'){
			console.log(this.ishid)
			this.ishid=true;
			}else
			this.ishid=false;
		},
		add(){
			this.$Message.success('添加成功');
			this.$router.push({
				path:'./food',
				query:{
					addgoods:this.food
				}
			})
		}
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
