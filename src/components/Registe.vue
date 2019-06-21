<template>
  <div class="login">
	  <form v-if="!open">
		  <h2>管理员注册界面</h2>
		  <div id="user">
		  <label >账号:</label>
		  <input type="text" v-model="user" placeholder="请输入您的账号" required="required">
		  </div>
		  <div id="e-mail">
			  <label >邮箱:</label>
			  <input type="text" v-model="email" placeholder="请输入您所悉知的邮箱">
		  </div>
		  <div id="password">
		  <label >密码:</label>
		  <input type="password" v-model="password" placeholder="请输入您的密码" required="required">
		  </div>
		  <div id="enterpw">
			  <label >确定密码:</label>
			  <input type="password" placeholder="请重复输入您的密码">
		  </div>
		  <div id="btn">
			  <button @click="registe">注册</button>
		  </div>
	  </form>
	  <div id="show" v-if="hid">
		  <h3>恭喜您，注册成功！</h3>
		<p v-model="user">    账号:	{{user}}</p>
		<p v-model="password">密码:	{{password}}</p>
	<p v-model="email">您的邮箱:	{{email}}</p>
		<router-link to="/login"><button @click="login">登陆</button></router-link>
	  </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
		user:'',
		email:'',
		password:'',
		hid:false,
		open:false
    }
  },
  methods:{
	  registe:function(){
		  this.hid=true;
		  this.open=true;
		  this.$Message.success("注册成功")
	  },
	  login:function(){
		  this.$Message.info('切换登陆页面')
	  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	
.login{
	max-width: 100%;
	max-height: 100%;
	background:url(../assets/bg.jpg);
	background-size: 100% 100%;
	height: 100%;
	width: 100%;
	position: fixed;
}
form{
	position: fixed;
	top:30%;
	left: 39%;
	width: 500px;
	height: 300px;
	border: 1px solid #007BFF;
	background: rgba(0,0,0,0.5);
}

h2{
	background: #000000;
	color: #999;
	text-align: center;
	padding: 10px;
	border-bottom:1px solid #007BFF ;
}
#user{
	
	text-align: center;
	margin-top: 6px;
	padding: 6px;
}
#e-mail{
	text-align: center;
	padding: 6px;
}
label{
	font-size: 18px;
	color: #117A8B;
}
input[type="text"]{
	width: 75%;
	padding: 5px;
	border: 1px solid #000000;
	border-radius: 3px;
}
#password{
	text-align: center;
	padding: 6px;
}
#password input[type="password"]{
	width:75%;
	padding: 5px;
	border: 1px solid #000000;
	border-radius: 3px;
}
#enterpw{
	margin-left: 7px;
	padding: 6px 0;
}
#enterpw input[type="password"]{
	width: 74%;
	margin-left: 2px;
	padding: 5px;
	border: 1px solid #000000;
	border-radius: 3px;
}
#btn{
	padding: 10px;
	text-align: center;
}
button{
	width: 380px;
	display: inline-block;
	border: 0;
	background: blueviolet;
	padding: 8px;
	margin-left: 37px;
	border-radius: 5px;
	cursor: pointer;
}
#show{
	position: fixed;
	top:30%;
	left: 39%;
	width: 500px;
	height: 300px;
	border: 1px solid #007BFF;
	background: rgba(0,0,0,0.5);
	text-align: center;
	color: #fff;
}
h3{
	font-size: 18px;
	margin-top: 15px;
	margin-bottom: 10px;
}
p{
	font-size: 16px;
	margin-right: 200px;
	padding: 8px;
}
#show button{
	margin-top: 10px;
	
}
</style>
