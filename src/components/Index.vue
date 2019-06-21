<template>
  <div id="index">
	  <div id="logo"><h1>Logo</h1></div>
	  
   <div id="list">
	   <ul>
	   <li><router-link to="/index"><Icon type="android-menu"></Icon><span>首页</span></router-link></li>
	   <li>
		 
		   <Icon type="document"></Icon>
		<span>数据管理</span>
		<Icon type="chevron-down"></Icon>
		
		</li>
	   <li><Icon type="plus-round"></Icon><span>添加数据</span><Icon type="chevron-down"></Icon></li>
	   <li><Icon type="star"></Icon><span>图标</span><Icon type="chevron-down"></Icon></li>
	   <li><Icon type="edit"></Icon><span>编辑</span><Icon type="chevron-down"></Icon></li>
	   <li><Icon type="settings"></Icon><span>设置</span><Icon type="chevron-down"></Icon></li>
	   <li><Icon type="information-circled"></Icon><span>说明</span><Icon type="chevron-down"></Icon></li>
	   </ul>
   </div>
  <div id="title">
	  <router-link to="/login">登录</router-link>
	  <router-link to="/registe">注册</router-link>
  </div>
  <div id="content">
	  <div id="part2">
	  		  <p>待办事项</p>
	  		  <ul>
	  		  	<li>待审评论<article>60</article></li>
	  		  	<li>待审文章<article>5</article></li>
	  		  	<li>投诉建议<article>2</article></li>
	  		  	<li>占位占位<article>0</article></li>
	  		  </ul>
	  </div>
	   <div id="part2">
	  		  <p>待办事项</p>
	  		  <ul>
	  		  	<li>待审评论<article>60</article></li>
	  		  	<li>待审文章<article>5</article></li>
	  		  	<li>投诉建议<article>2</article></li>
	  		  	<li>占位占位<article>0</article></li>
	  		  </ul>
	  </div>
	   <div id="part2">
	  		  <p>待办事项</p>
	  		  <ul>
	  		  	<li>待审评论<article>60</article></li>
	  		  	<li>待审文章<article>5</article></li>
	  		  	<li>投诉建议<article>2</article></li>
	  		  	<li>占位占位<article>0</article></li>
	  		  </ul>
	  </div>
	   <div id="part2">
	  		  <p>待办事项</p>
	  		  <ul>
	  		  	<li>待审评论<article>60</article></li>
	  		  	<li>待审文章<article>5</article></li>
	  		  	<li>投诉建议<article>2</article></li>
	  		  	<li>占位占位<article>0</article></li>
	  		  </ul>
	  </div>
	  <div id="part1">
		    <p>快捷方式</p>
	  <ul><!-- 
	  	 --><li>发布文章</li><!-- 
	  	 --><li>查看建议</li><!-- 
	  	 --><li>占位占位</li><!-- 
	  	 --><li>占位占位</li><!-- 
	  	 --><li>占位占位</li><!-- 
	  	 --><li>占位占位</li><!-- 
	  	 --><li>占位占位</li><!-- 
	  	 --><li>占位占位</li>
	  </ul>
	  </div>
	    <div id="part1">
	    		    <p>快捷方式</p>
	    <ul><!-- 
	    	 --><li>发布文章</li><!-- 
	    	 --><li>查看建议</li><!-- 
	    	 --><li>占位占位</li><!-- 
	    	 --><li>占位占位</li><!-- 
	    	 --><li>占位占位</li><!-- 
	    	 --><li>占位占位</li><!-- 
	    	 --><li>占位占位</li><!-- 
	    	 --><li>占位占位</li>
	    </ul>
	    </div>
	      
	  
	  
	

	  
  </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
	 time:new Date(),
    }
  },
  methods:{
	  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#index *{
	box-sizing: border-box;
	padding: 0;
	padding: 0;	
}
#logo{
	background: #1c2438;
	border-right: 1px solid rgba(255,255,255,.5);
	position: fixed;
	text-align: center;
	width: 10%;
	height: 5%;
	color: rgba(255,255,255,.5);
}
#logo h1{
	padding: 3px;
}
#list {
	width: 10%;
	background: #0554a9;
	height: 100%;
	position: fixed;
	top: 45px;
}
#list ul li,#list ul li a{
	list-style: none;
	display: block;
	height: 50px;
	line-height: 50px;
	border-bottom: 1px solid #007BFF;
	color: rgba(0,0,0,.8);
	font-size: 16px;
	text-decoration: none;
}
#list span{
}
#list i{
	margin-left:30px;
	margin-right: 10px;
}
#list .ivu-icon-chevron-down{
	float: right;
	font-size: 18px;
	line-height: 50px;
}

#list ul li:hover,#list a:hover{
	background:rgba(255,255,255,.6);
	color: #000;
	transition: 0.5s;
}
#title::before{
	clear: both;
}
#title{
	width: 90%;
	height: 5%;
	background:#1c2438;
	margin-left: 10%;
	margin-top: -42px;
	padding: 2px;
	position: fixed;
	top:42px;
}
#title a{
	text-decoration: none;
	color: rgba(255,255,255,.5);
	display: inline-block;
	padding: 8px;
	font-size: 16px;
}

#content {
	margin-left: 10%;
	
}
p{		
		margin: 10px;
}
#part1{
	width: 600px;
	height: 300px;
	padding: 10px;
	background: rgba(0,0,0,0.1);
	border-right:1px solid rgba(0,0,0,.3);
	display: inline-block;
	margin-right: -3px;
}

#part1 li{
	list-style: none;
	margin: 10px 5px;
	display: inline-block;
	width:130px ;
	height: 100px;
	line-height: 100px;
	text-align: center;
	border: 1px solid #000000;
}
#part2:first-child{
	
	margin-top:42px ;
}
#part2{
	margin-right: -2px;
	width: 600px;
	height: 300px;
	border-right: 1px solid rgba(0,0,0,.3);
	background: rgba(0,0,0,.1);
	display: inline-block;
}
#part2 li{
	list-style: none;
	border: 1px solid #002752;
	width: 250px;
	height: 100px;
	display: inline-block;
	line-height: 50px;
	text-align: center;
	margin: 10px 20px;
}

</style>
