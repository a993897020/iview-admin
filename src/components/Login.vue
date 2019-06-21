<template>
  <div class="login">
	  <form>
		  <h2>管理员登陆界面</h2>
		  <div id="user">
		  <label >账号:</label>
		  <input type="text" placeholder="请输入您的账号" required="required">
		  </div>
		  <div id="password">
		  <label >密码:</label>
		  <input type="password" placeholder="请输入您的密码" required="required">
		  </div>
		  <div id="btn">
			<router-link to='/header'><button @click="login">登陆</button></router-link>
			  <router-link to='/registe'><button @click="registe">注册</button></router-link>
		  </div>
	  </form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
     
    }
  },
  methods:{
	  login(){
		  this.$Message.success("登陆成功！");
	  },
	  registe(){
		  this.$Message.info('切换注册页面');
  }
},
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
	margin-top: 50px;

	padding: 10px;
}
label{
	font-size: 18px;
	color: #117A8B;
}
input[type="text"]{
	width: 80%;
	padding: 5px;
	border: 1px solid #000000;
	border-radius: 3px;
}
#password{
	text-align: center;
	padding: 10px;
}
input[type="password"]{
	width:80%;
	padding: 5px;
	border: 1px solid #000000;
	border-radius: 3px;
}
#btn{
	padding: 10px;
	text-align: center;
}
button{
	border: 0;
	background: blueviolet;
	padding: 8px;
	margin-left: 25px;
	border-radius: 3px;
	cursor: pointer;
}
</style>
