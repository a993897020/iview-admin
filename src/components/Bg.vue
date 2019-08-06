<template>
	<router-link to="/login">
		<h1>Hello,Welcome to my website</h1>
		
  <div class="bg"  >
  </div>
  </router-link>
</template>

<script>
export default {
  name: 'bg',
  data () {
    return {
     
    }
  },
 methods:{

},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.bg{
		width: 100%;
		height: 100%;
		background:url(../assets/bg2.jpg);
		background-size: 100% 100%;
		position: fixed;
		opacity: 1;
	}
	.bg:hover{
		transform: scale(1.5,1.5);
		transition: 5s;
	}
	i{
		margin: 0 5px;
	}
	h1{
		position: fixed;
		left: 50%;
		top: 5%;
		width: 800px;
		margin-left: -400px;
		font-size: 50px;
		z-index: 99;
		font-family: "Helvetica Neue";
		color:rgba(255,255,255,.5);
	}
	
</style>
