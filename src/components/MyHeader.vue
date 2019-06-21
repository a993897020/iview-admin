<template>
  <div class="myheader">
	<Row type="flex">
		<i-col  class="col-4" span="4">

			<Menu  style="padding: 50px 0;" width="auto" :theme="bg" active-name="0" @on-select="linkto" :active-name="0" ref='menu' >
					<MenuItem  :name='0'  to='/header'><Icon type="md-menu" /><span id="first-span">首页</span></MenuItem>
				 <Submenu name='1'  >
				<template slot="title">
			   <Icon type="ios-document-outline" />
			<span>数据管理</span>
			</template>
			<MenuItem name='1-1' to="/user">用户列表</MenuItem>
			<MenuItem name='1-2' to="/store">商家列表</MenuItem>
			<MenuItem name='1-3' to='/food'>食品列表</MenuItem>
			<MenuItem name='1-4' to="/order">订单列表</MenuItem>
			<MenuItem name='1-5' to="/admin">管理员列表</MenuItem>
			</Submenu>
					 <Submenu name='2'  >
				<template slot="title">
			   <Icon type="md-add" />
			<span>添加数据</span>
			</template>
			<MenuItem name='2-1' to="addstore">添加商铺</MenuItem>
			<MenuItem name='2-2' to='addgoods'>添加商品</MenuItem>
			
			</Submenu>
					 <Submenu name='3'  >
				<template slot="title">
			   <Icon type="md-star" />
			<span>图表</span>
			</template>
			<MenuItem name='3-1' to="/star">用户分布</MenuItem>
			</Submenu>
				 <Submenu name='4'  >
				<template slot="title">
			   <Icon type="md-create" />
			<span>编辑</span>
			</template>
			<MenuItem name='4-1' to="/edit">文本编辑</MenuItem>
			</Submenu>
			 <Submenu name='5'  >
				<template slot="title">
			   <Icon type="md-settings" />
			<span>设置</span>
			</template>
			<MenuItem name='5-1' to="/setting">管理员设置</MenuItem>
			</Submenu>
			<Submenu name='6'  >
				<template slot="title">
			   <Icon type="md-information-circle" />
			<span>说明</span>
			</template>
			<MenuItem name='6-1' to="/explain">说明</MenuItem>
			</Submenu>
				</Menu>
		</i-col>
	
		<i-col span="20" class="col-8">
			<header>
			<Breadcrumb>
				<BreadcrumbItem>首页</BreadcrumbItem>
			</Breadcrumb>
			
			
			<div class="demo-avatar"  >
					
				<Badge  :count="99" >
					<Dropdown trigger="click">
					<Avatar href="javascript:void(0)" size="large" :style="{background:color}">{{user}}</Avatar>
						<DropdownMenu slot="list" placement='top'>
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
			
				<h1 style="text-align: center;">数据统计</h1>
			<Table    :columns="columns" :data='data'></Table>
			<footer>
			<h1 style="margin: 20px;">走势图</h1>
			<ve-line  maxwidth="1300px" minwidth="800px"  maxheight="500px" minheight="300px" :data="charData" :settings="chartSettings" :mark-point='markPoint' :toolbox="toolbox"></ve-line>
			</footer>
		</i-col>
	</Row>
	
  </div>
</template>

<script>
	import 'echarts/lib/component/toolbox'
	import 'echarts/lib/component/markPoint'
	  const Userlist=['U','luck','jack'];
	const Colorlist=['#f56a00', '#7265e6', '#ffbf00'];
export default {
  name: 'myheader',
  data () {
	  this.toolbox ={
		  
		  feature:{
			  magicType:{	//切换
				  show:true,
				  type:['line','bar','pie'],
				  },
			  saveAsImage:{		//保存
				  show:true,
				  type:'png',
				  
			  },
			  dataZoom:{		//缩放
				  show:true,
				  xAxisIndex:0,
				  yAxisIndex:false,
			  },
			  dataView:{ 				//编辑
				  show:true,
				  readOnly:false,
				  lang:['数据视图','关闭','刷新'],
				  backgroundColor:'#fff',
				  textareaColor:"#fff",               
            textareaBorderColor:"#333",  
				  textColor:'#000',
				  buttonColor:'blue',
				  buttonTextColor:'#fff'
			  }
			  }
	  }	
	  this.markPoint={
		  data:[
		 { name:'最大值',
		  type:'max',
		  },
		  {name:'最小值',
		  type:'min'}
		  ]
	  }
	  this.chartSettings={
		  axisSite:{right:['新增订单']},
		  xAxisType:'time',
		  yAxisType:['normal','normal'],
		  yAxisName:['用户','订单'],
		  max:[200,200],
		  min:[0,0],
	  }

    return {
			charData:{
				columns:['日期','新注册用户','新增订单','新增管理员'],
				rows:[
					{'日期':'2019-06-03','新注册用户':56,'新增订单':17,'新增管理员':121},
					{'日期':'2019-06-04','新注册用户':55,'新增订单':17,'新增管理员':129},					
					{'日期':'2019-06-05','新注册用户':56,'新增订单':18,'新增管理员':145},					
					{'日期':'2019-06-06','新注册用户':40,'新增订单':11,'新增管理员':103},					
					{'日期':'2019-06-07','新注册用户':8,'新增订单':5,'新增管理员':26},					
					{'日期':'2019-06-08','新注册用户':4,'新增订单':5,'新增管理员':36},					
					{'日期':'2019-06-09','新注册用户':5,'新增订单':5,'新增管理员':30},					
					
				]
				},
			orgOptions:{},
			bg:'dark',
			user:Userlist[0],
			color:Colorlist[0],
			value:false,
			columns:[
				{
				title:'#',
				key:'no',
				align:'center'
			},
			{
				title:'用户数',
				key:'user',
				align:'center'
			},
			{
				title:'订单数',
				key:'num',
				align:'center'
			},
			{
				title:'管理员数',
				key:'person',
				align:'center'
				}
    ],
	data:[
		{
		
			no:'当日数据：',
			user:'12',
			num:'123',
			person:'36',
			cellClassName:{
				no:'demo-table-info-cell-no',
			}
		},
		{
			no:'历史数据：',
			user:'66666',
			num:'6666',
			person:'666',
			cellClassName:{
				no:'demo-table-info-cell-non',
			}
			
		}
	],

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
		background: #002752;
		min-height: 100vh;
		max-height: 200vh;
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
	h1{
		margin-top: 20px
	}
	/deep/.ivu-table{
		border: none;
	}
    /deep/.ivu-table .demo-table-info-cell-no {
        background-color: #ff9800;
        color: #fff;
		border-radius: 5px;
    }
	/deep/.ivu-table .demo-table-info-cell-non {
	    background-color: #20a0ff;
	    color: #fff;
		border-radius: 5px;
	}
	footer{
		margin-top: 30px;
	}
	footer Button{
		display: block;
		float: right;
		margin-right: 60px
	}
	footer .ve-line{
		margin: 30px auto;
	}
</style>
