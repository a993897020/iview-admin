<template>
  <div class="user">
	<Row type="flex">
		<i-col  class="col-4" span="4">

			<Menu style="padding: 50px 0;" width="auto" :theme="bg" active-name="2-1" @on-select="linkto"  :open-names="['2']" ref='menu' >
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
			<MenuItem name='2-1' to='addstore'>添加商铺</MenuItem>
			<MenuItem name='2-2' to='addgoods'>添加商品</MenuItem>
			
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
				<BreadcrumbItem>用户列表</BreadcrumbItem>
				
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
				<Form ref="all" :model="all" :label-width="120" label-position="left" :rules="ruleValidate" style="margin: 0 auto; width: 1200px;">
					<FormItem label='店铺名称' prop="name" >
						<Input v-model="all.name"  ></Input>
					</FormItem>
					<FormItem label='详细地址' prop="address" >
						<Input  v-model="all.address"></Input>
					</FormItem>
					<FormItem label='联系电话' prop="phone" >
						<Input v-model="all.phone" ></Input>
					</FormItem>
					<FormItem label='店铺简介'>
						<Input v-model="all.introduction"></Input>
					</FormItem>
					<FormItem label='店铺标语'>
						<Input v-model="all.title"></Input>
					</FormItem>
					<FormItem label='店铺分类'>
						<Cascader :data="data" v-model="value1"></Cascader>
					</FormItem>
					<FormItem label='店铺特点'>
						<Span>品牌保证</Span><i-switch></i-switch>
						<Span>蜂鸟专送</Span><i-switch></i-switch>
						<Span>新开店铺</Span><i-switch></i-switch>
						<br/>
						<Span style="margin-right: 15px;">外卖保</Span><i-switch></i-switch>
						<Span style="margin-right: 15px;">准时达</Span><i-switch></i-switch>
						<Span style="margin-right: 15px;">开发票</Span><i-switch></i-switch>
					</FormItem>
					<FormItem label='配送费'>
						<InputNumber :max="20" :min="0" ></InputNumber>
					</FormItem>
					<FormItem label='起送价'>
						<InputNumber :max="100" :min="0"></InputNumber>
					</FormItem>
					<FormItem label="营业时间">
						<TimePicker type="time" placeholder="起始时间" format="HH:mm" confirm style="margin-right: 10px;"></TimePicker>
						<TimePicker type="time" placeholder="结束时间" format="HH:mm" confirm></TimePicker>
					</FormItem>
					<FormItem label="上传店铺图片">
						<Upload multiple type="drag" action="">
							<div style="padding: 20px 0;">
								<Icon type="ios-cloud-upload" size="52" style="color: #3399ff;"></Icon>
								<p>点击或拖拽文件即可上传</p>
							</div>
						</Upload>
					</FormItem>
						<FormItem label="上传营业执照">
						<Upload multiple type="drag" action="">
							<div style="padding: 20px 0;">
								<Icon type="ios-cloud-upload" size="52" style="color: #3399ff;"></Icon>
								<p>点击或拖拽文件即可上传</p>
							</div>
						</Upload>
					</FormItem>
							<FormItem label="上传餐饮服务许可证">
						<Upload multiple type="drag" action="">
							<div style="padding: 20px 0;">
								<Icon type="ios-cloud-upload" size="52" style="color: #3399ff;"></Icon>
								<p>点击或拖拽文件即可上传</p>
							</div>
						</Upload>
					</FormItem>
					<FormItem label="优惠活动">
						<Select  @on-change="select" style="margin-bottom: 10px;">
							<Option v-for='item in list' :value="item.value" :key="item.value">{{item.label}}</Option>
						</Select>
						<Modal v-model="show" title="提示" @on-ok="ok" @on-cancel="cancel">
							<p>请输入活动详情</p>
							<Input v-model="content">{{content}}</Input>
						</Modal>
						<Table :columns='hang' :data='lie'>
							<template slot-scope="{row,index}" slot="action">
								<Button type="error" @click="remove(index)">删除</Button>
							</template>
						</Table>
						<router-link to='/store'><Button  @click="add" type="primary" size="large" style="margin: 20px 450px;text-align: center; ">立即创建</Button></router-link>
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
  name: 'user',
  data () {
	 

    return {
			
			orgOptions:{},
			bg:'dark',
			user:Userlist[0],
			color:Colorlist[0],
			value:false,
			ruleValidate:{
				name:[
					{required:true,message:'请输入店铺名称',trigger:'blur'},
				],
				address:[
					{required:true,message:'请输入详细地址',trigger:'blur'}
				],
				phone:[
					{required:true,message:'请输入联系电话',reigger:'blur'}
				]
			},
			list:[	{label:'mjyh',value:'满减优惠'},
					{label:'yhdcb',value:'优惠大酬宾'},
					{label:'xyhlj',value:'新用户立减'},
					{label:'jjlj',value:'进店领卷'}],
			hang:[
				{title:'活动标题',key:'title',align:'center'},
				{title:'活动名称',key:'name',align:'center'},
				{title:'活动详情',key:'information',align:'center'},
				{title:'操作',key:'handle',slot:'action',align:'center'}
			],
			lie:[
				{title:'减',name:'满减优惠',information:'满30减5，满60减10'},
			],
			value1:[],
			show:false,
			content:'',
			all:{
				name:'',
				title:'',
				introduction:'',
				phone:'',
				address:'',
				classify:''
				},
			data:[{
				value:'yglx',
				label:'异国料理',
				children:[
							{value:'rhlx',label:'日韩料理'},
							{value:'xc',label:'西餐'},
							{value:'psym',label:'披萨意面'},
							{value:'dnyc',label:'东南亚菜'}],
					},{
				value:'kcbd',
				label:'快餐便当',
				children:[
							{value:'jc',label:'简餐'},
							{value:'gjf',label:'盖浇饭'},
							{value:'mfmg',label:'米粉面馆'},
							{value:'bzzd',label:'包子粥店'},
							{value:'xgsg',label:'香锅砂锅'},
							{value:'mlt',label:'麻辣烫'},
							{value:'jzht',label:'饺子馄饨'},
							{value:'hb',label:'汉堡'},
							{value:'sjgt',label:'生煎锅贴'},
							{value:'hmjmf',label:'黄焖鸡米饭'},
							{value:'slf',label:'烧腊饭'},
							{value:'bzf',label:'煲仔饭'},
							{value:'glf',label:'咖喱饭'},],
					},{
					value:'xcsy',
					label:'小吃夜宵',
					children:[
								{value:'xlx',label:'小龙虾'},
								{value:'dfxc',label:'地方小吃'},
								{value:'sk',label:'烧烤'},
								{value:'zjzc',label:'炸鸡炸串'},
								{value:'yblw',label:'鸭脖卤味'},
								{value:'ls',label:'零食'},
								],
						},
						{
						value:'gssx',
						label:'果蔬生鲜',
						children:[
									{value:'sg',label:'水果'},
									{value:'sx',label:'生鲜'},
									{value:'sc',label:'蔬菜'},
									{value:'hxsc',label:'海鲜水产'},
									],
							},
							{
							value:'tscx',
							label:'特色菜系',
							children:[
										{value:'sxc',label:'川湘菜'},
										{value:'qtcx',label:'其他菜系'},
										{value:'jzc',label:'江浙菜'},
										{value:'yc',label:'粤菜'},
										{value:'hx',label:'海鲜'},
										{value:'hgsy',label:'火锅烧鱼'},
										{value:'dbc',label:'东北菜'},
										{value:'xbc',label:'西北菜'},
										{value:'ync',label:'云南菜'},
										{value:'xjc',label:'新疆菜'},
										{value:'lc',label:'鲁菜'},
										],
								},
								{
								value:'sdcs',
								label:'商店超市',
								children:[
											{value:'sd',label:'商店'},
											{value:'bld',label:'便利店'},
											{value:'mjf',label:'名酒坊'},
											{value:'lsyl',label:'零食饮料'},
											{value:'sz',label:'水站'},
											{value:'c',label:'茶'},
											{value:'nz',label:'奶站'},
											{value:'ly',label:'粮油'},
											{value:'mzmy',label:'美妆母婴'},
											],
									},
									{
									value:'xhdg',
									label:'鲜花蛋糕',
									children:[
												{value:'xh',label:'鲜花'},
												{value:'dg',label:'蛋糕'},
												{value:'mb',label:'面包'},
												],
										},
										{
										value:'tpyp',
										label:'甜品饮品',
										children:[
													{value:'ncgz',label:'奶茶果汁'},
													{value:'tp',label:'甜品'},
													{value:'kf',label:'咖啡'},
													],
											},],
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
			this.lie.splice(index,1);
		},
		select(){
			console.log(this.list);
			this.show=true;
		},
		ok(){
			if(this.content==''){
				this.$Message.info('请输入活动详情');
			}else{
				this.lie.push({title:'减',name:'满减优惠',information:this.content});
				this.$Message.success('添加成功');
			}
		},
		cancel(){
			this.$Message.info('取消');
		},
		add(){
			this.$Message.success('创建成功');
			this.$router.push({
				path:'./store',
				query:{
					nameId:this.all
				}
			});
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
	a{
		text-decoration: none;
		color: #9ea7b4;
	}
	a:hover{
		color: #fff;
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
	span{
		margin-right: 5px;
	}
	/deep/.demo-breadcrumb-separator{
		color: #ff5500;
		padding: 0 5px;
	}
	/deep/.ivu-table{
		line-height: 6vh;
	}
	/deep/.ivu-card-body{
		margin-top: 20px;
	}
	/deep/.col-4 .ivu-col .ivu-col-span-4{
		position: fixed;
		left: 0;
		top: 0;
	}
</style>
