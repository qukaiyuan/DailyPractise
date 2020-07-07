<template>
	<view class="container">
		<view class="page-section page-section-gap">
			<uni-search-bar @confirm="handle" @input="changed" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
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
	.container {
		padding: 20px;
		font-size: 16px;
		font-weight: bold;
		line-height: 1.5;
	}
</style>
