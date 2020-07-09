<template>
	<view class="container">
		<view @click="open">点我跳转</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			open:function(e) {
				uni.navigateTo({
					url:'../list/index'
				})
			},
			handle:function(e) {
				console.log(e.value)
			},
			
			changed: function(e) {
				console.log(e)
			}
		}
	}
</script>

<style>
	
</style>
