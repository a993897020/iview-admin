<template>
  <div class="Expand">
	<Row class="expand-row">
		<Col span="12">
			<span class="expand-key">店铺名称:</span>
			<span class="expand-value">{{row.name}}</span>
		</Col>
		<Col span="12">
			<span class="expand-key">店铺地址:</span>
			<span class="expand-value">{{row.address}}</span>
		</Col>
	</Row>
	<Row class="expand-row">
		<Col span="12">
		<span class="expand-key">店铺介绍:</span>
		<span class="expand-value">{{row.introduction}}</span>
		</Col>
		<Col span="12">
			<span class="expand-key">店铺ID:</span>
			<span class="expand-value">{{row.id}}</span>
		</Col>
		
	</Row >
	<Row class="expand-row">
		<Col span="12">
			<span class="expand-key">联系电话:</span>
			<span class="expand-value">{{row.phone}}</span>
		</Col>
		<Col span="12">
			<span class="expand-key">评分:</span>
			<span class="expand-value">{{row.score}}</span>
		</Col>
	</Row>
	<Row class="expand-row">
		<Col span="12">
			<span class="expand-key">销售量:</span>
			<span class="expand-value">{{row.xsl}}</span>
		</Col>
		<Col span="12">
			<span class="expand-key">分类:</span>
			<span class="expand-value">{{row.classify}}</span>
		</Col>
	</Row>
  </div>
</template>

<script>
export default {

  data () {
    return {
    
    }
  },
  props:{
	  row:Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.expand-row{
	margin: 10px;
}
</style>
