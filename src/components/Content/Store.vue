<template>
  <div class="store">
	<Row type="flex">
		<i-col  class="col-4" span="4">

			<Menu style="padding: 50px 0;" width='auto' :theme="bg" active-name="1-2" @on-select="linkto"  :open-names="['1']" ref='menu' >
				<MenuItem  :name='0' to='/header'><Icon type="md-menu" /><span id="first-span">首页</span></MenuItem>
				 <Submenu name='1'  >
				<template slot="title">
			   <Icon type="ios-document-outline" />
			<span>数据管理</span>
			</template>
			<MenuItem name='1-1' to="/user">用户列表</MenuItem>
			<MenuItem name='1-2' to='/store'>商家列表</MenuItem>
			<MenuItem name='1-3' to="/food">食品列表</MenuItem>
			<MenuItem name='1-4' to='/order'>订单列表</MenuItem>
			<MenuItem name='1-5' to='/admin'>管理员列表</MenuItem>
			</Submenu>
					 <Submenu name='2'  >
				<template slot="title">
			   <Icon type="md-add" />
			<span>添加数据</span>
			</template>
			<MenuItem name='2-1' to="/addstore">添加商铺</MenuItem>
			<MenuItem name='2-2' to="/addgoods">添加商品</MenuItem>
			
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
				<BreadcrumbItem>数据管理</BreadcrumbItem>
				<BreadcrumbItem>商家列表</BreadcrumbItem>
				
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
			<div  class="content" ></div>
			<Card >
			<footer>
				<Table  :columns="columns1" :data="data1"  >
					
					<template slot-scope="{row,index}" slot="name">
						<Input type="text" v-model="editName" v-if="editIndex ===index"></Input>
						<span v-else>{{row.name}}</span>
					</template>
					<template slot-scope="{row,index}" slot="address">
						<Input type="text" v-model="editAddress" v-if="editIndex ===index"></Input>
						<span v-else>{{row.address}}</span>
					</template>
					<template slot-scope="{row,index}" slot="introduction">
						<Input type="text" v-model="editIntroduction" v-if="editIndex ===index"></Input>
						<span v-else>{{row.introduction}}</span>
					</template>
					
					
					<template slot-scope="{row , index }" slot="action">
						<div v-if="editIndex===index">
							<Button @click="handleSave(index)" ghost type="success">保存</Button>
							<Button @click="editIndex=-1" ghost type="warning">取消</Button>
						</div>
						<div v-else>
							<Button type="primary" size="small" style="margin-right: 5px;" @click="show(index)">查看</Button>
							<Button type="error"  size="small" @click="remove(index)">删除</Button>
							<Button @click="handleEdit(row,index)">编辑</Button>
						</div>
					</template>
				</Table>
			</footer>
			</Card>
		</i-col>
	</Row>
	
  </div>
</template>

<script>
	import AddStore from './AddStore.vue'
	import Utils from '../../util.js'
	import expandRow from './table/table-expand.vue'
	  const Userlist=['U','luck','jack'];
	const Colorlist=['#f56a00', '#7265e6', '#ffbf00'];
export default {
  name: 'store',
  components:{expandRow,AddStore},
  
  data () {
	 

    return {
			hid:true,
			orgOptions:{},
			bg:'dark',
			user:Userlist[0],
			color:Colorlist[0],
			value:false,
			columns1:[
				{
					type:'expand',
					width:50,
					render:(h,params)=>{
						return h(expandRow,{
							props:{
								row:params.row
							}
						})
					}
				},
				{
				title:'店铺名称',
				key:'name',
				slot:'name',
				align:'center'
			},
			
			{
				title:'店铺地址',
				key:'address',
				slot:'address',
				align:'center'
			},
			{
				title:'店铺介绍',
				key:'introduction',
				slot:'introduction',
				align:'center'
			},
			{
				title:'操作',
				slot:'action',
				key:'handle',
				align:'center'
				}
    ],
	msg:{},
	myIndex:{},
	data1:[
		{
			name:'欧衣尚',
			address:'广东',
			introduction:'唯一一家卖衣服的店铺，瞧一瞧，看一看咯',
			id:1,
			phone:123456,
			score:4.5,
			xsl:4399,
			classify:'外套,卫衣,长袖,短袖等等'
		},
		{
			name:'尚豪鞋柜',
			address:'深圳',
			introduction:'全网唯一一家鞋店，有需要就过来买，没需要也可过来看看勒',
			id:2,
			phone:123789,
			score:5.0,
			xsl:9999,
			classify:'球鞋,板鞋,拖鞋,水鞋等等,'
		},
		{
			name:'新窗口电脑店',
			address:'上海',
			introduction:'网上电脑店虽多，可是我们电脑店唯一个宗旨是：便宜有好货，绝不会坑你一分钱，钱的多少决定于你电脑配置的高与低，谢谢',
			id:3,
			phone:1299558,
			score:5.0,
			xsl:2599,
			classify:'电脑,配件'
		},
		{
			name:'金味缘零食店',
			address:'北京',
			introduction:'这里是零食店，应有尽有，此店是你绝不停口的店铺，谢谢',
			id:4,
			phone:4399530,
			score:4.8,
			xsl:5890,
			classify:'零食'
		},
		{
			name:'大名气手机店',
			address:'上海',
			introduction:'手机店，只要你喜欢，只要你钱包鼓鼓，即可拥有属于你喜欢的手机',
			id:5,
			phone:5825522,
			score:4.9,
			xsl:3980,
			classify:'手机'
		},
		{
			name:'可以吧',
			address:'广东',
			introduction:'瞧一瞧，看一看咯',
			id:6,
			phone:1234567,
			score:4.2,
			xsl:12355,
			classify:'可以'
		},
			{
			name:'可以吧',
			address:'广东',
			introduction:'瞧一瞧，看一看咯',
			id:7,
			phone:1234567,
			score:4.2,
			xsl:12355,
			classify:'可以'
		},
			{
			name:'可以吧',
			address:'广东',
			introduction:'瞧一瞧，看一看咯',
			id:8,
			phone:1234567,
			score:4.2,
			xsl:12355,
			classify:'可以'
		},
			{
			name:'可以吧',
			address:'广东',
			introduction:'瞧一瞧，看一看咯',
			id:9,
			phone:1234567,
			score:4.2,
			xsl:12355,
			classify:'可以'
		},
			{
			name:'可以吧',
			address:'广东',
			introduction:'瞧一瞧，看一看咯',
			id:10,
			phone:1234567,
			score:4.2,
			xsl:12355,
			classify:'可以'
		},
			{
			name:'不可以',
			address:'广东',
			introduction:'瞧一瞧，看一看咯',
			id:11,
			phone:1234567,
			score:4.2,
			xsl:12355,
			classify:'可以'
		},
			{
			name:'不可以',
			address:'广东',
			introduction:'瞧一瞧，看一看咯',
			id:12,
			phone:1234567,
			score:4.2,
			xsl:12355,
			classify:'可以'
		},
		{
			name:'不可以',
			address:'广东',
			introduction:'瞧一瞧，看一看咯',
			id:13,
			phone:1234567,
			score:4.2,
			xsl:12355,
			classify:'可以'
		},
		{
			name:'不可以',
			address:'广东',
			introduction:'瞧一瞧，看一看咯',
			id:14,
			phone:1234567,
			score:4.2,
			xsl:12355,
			classify:'可以'
		},
		{
			name:'不可以',
			address:'广东',
			introduction:'瞧一瞧，看一看咯',
			id:15,
			phone:1234567,
			score:4.2,
			xsl:12355,
			classify:'可以'
		},
	],
	editIndex:-1,
	editName:'',
	editAddress:'',
	editIntroduction:'',
  }
 

  },

  /* 传递数据!!!!!!!!!*/
mounted(){ 
	 // Utils.$on('data',(test)=>{
		//  console.log(test);
		//  console.log(this.$route.query.nameId);
		//  setTimeout(()=>{
		// 	 this.getParams(test);
		//  },1000)
	 // })
		this.getParams();
 },


	methods:{
		 getParams(){
			 
			 
			 
				//this.data1.push(test);
					 var routerParams=this.$route.query.nameId
					 console.log(routerParams)
					 this.data1.unshift(routerParams);
					 console.log(this.data1);
		 		
		 
			
		 },
		/* 导航栏active */
		linkto:function(name){
			console.log(name)
		this.$router.push(name);
		},
		/* 更改头像 */
		handleChange:function(){
			const index=Userlist.indexOf(this.user);
			this.user=index<Userlist.length-1?Userlist[index+1]:Userlist[0];
			this.color=index<Colorlist.length-1?Colorlist[index+1]:Colorlist[0];
		},
		/* 表格查看 */
		show(index){
			this.$Modal.info({
				title:'信息',
				content:` 商铺名称:${this.data1[index].name}<br>商铺地址:${this.data1[index].address}<br>商铺介绍:${this.data1[index].introduction}`
			})
		},
		/* 表格的功能删除 */
		remove(index){
			this.$Message.info('删除成功')
			this.data1.splice(index,1);
		},
		/* 表格的功能编辑 */
		handleEdit(row,index){
			this.editName=row.name;
			this.editAddress=row.address;
			this.editIntroduction=row.introduction;
			this.editIndex=index;
			console.log(index);
			console.log(this.data1)
		},
		/* 表格的保存 */
		handleSave(index){
			this.data1[index].name=this.editName;
			this.data1[index].address=this.editAddress;
			this.data1[index].introduction=this.editIntroduction;
			this.editIndex=-1;
			this.$Message.success('保存成功');
		},
		
    },

 // watch:{
 // 	 '$route':'getParams'
 //  }, 

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
	/deep/.ivu-table{
		
	}
	/deep/.ivu-card-body{
		margin-top: 20px;
	}
</style>
