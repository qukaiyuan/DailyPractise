<template>
	<view>
		<view class="page-section swiper">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item class="bggr">
					<view class="swiper-item">A</view>
				</swiper-item>
				<swiper-item class="bgbl">
					<view class="swiper-item">B</view>
				</swiper-item>
				<swiper-item class="bggr">
					<view class="swiper-item">C</view>
				</swiper-item>
			</swiper>
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
			
		}
	}
</script>

<style scoped>
	.bgrd {
		background-color: #DD524D;
	}
	.bgbl {
		background-color: #007AFF;
	}
	.bggr {
		background-color: #4CD964;
	}
</style>
