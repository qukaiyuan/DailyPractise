<template>
	<view class="container">
		<view class="uni-link" @click="backhome">返回首页</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods:{
			backhome:function(e) {
				uni.navigateTo({
					url:"../index/index"
				})
			}
		}
	}
</script>

<style>
</style>
