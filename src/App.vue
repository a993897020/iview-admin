<template>
  <div id="app">
  <!--  <Index></Index> -->
	<!-- <Login></Login> -->
	<!-- <Registe></Registe> -->
	<router-view></router-view>
  </div>
</template>

<script>
import Index from './components/Index'
import Login from './components/Login'
import Registe from './components/Registe'
import Bg from './components/Bg'
import MyHeader from './components/MyHeader'
import User from './components/Content/User'
import Store from './components/Content/Store'

export default {
  name: 'App',
  components: {
   
  }
}
</script>

<style>
	*{
		padding: 0;
		margin: 0;
		}
#app {
  
}
</style>
