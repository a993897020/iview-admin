<template>
	<div class="order-table">
		<Row class="expand-row">
			<Col span="12">
				<span class="expand-key">用户名</span>
				<span class="expand-value">{{row.name}}</span>
			</Col>
			<Col span="12" >
				<span class="expand-key">店铺名称</span>
				<span class="expand-value">{{row.StoreName}}</span>
			</Col>
		</Row>
		<Row class="expand-row">
			<Col span="12">
				<span class="expand-key">收货地址</span>
				<span class="expand-value">{{row.address}}</span>
			</Col>
			<Col span="12">
				<span class="expand-key">店铺ID</span>
				<span class="expand-value">{{row.id}}</span>
			</Col>
		</Row class="expand-row">
		<Row>
			<Col span="12">
				<span class="expand-key">店铺地址</span>
				<span class="expand-value">{{row.StoreAddress}}</span>
			</Col>
			<Col span="12">
				<span class="expand-key">联系电话</span>
				<span class="expand-value">{{row.phone}}</span>
			</Col>
		</Row>
	</div>
</template>

<script>
	export default{
		props:{
			row:Object
		}
	}
</script>

<style  scoped="scoped" >
	.expand-row{
		margin: 10px 0;
	}
	.expand-value{
		margin-left: 20px;
	}
</style>
