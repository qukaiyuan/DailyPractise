<template>
	<view>
		<view class="swiper-bar">
			<view class="swiper-bar-note">点击图片可进入：{{imgTo}}</view>
			<view>安全运行<text class="wt-border">{{workingTime}}</text>天</view>
		</view>
		
		<view class="page-section swiper">
			<swiper 
			class="swiper"
			:indicator-dots="true" 
			:autoplay="true" 
			:interval="3000" 
			:circular="true"
			:duration="1000"
			@change="handleSwiper"
			>
				<view 
				v-for="item in banner" 
				:key="item.id">
					<swiper-item @click="handleSwiperItem(item)">
						<view class="swiper-item">
							<image
							class="scgj-full-image" 
							:src="item.src" 
							mode="aspectFill"
							></image>
						</view>
					</swiper-item>
				</view>
			</swiper>
		</view>
		
		<view class="cate-button">
			<view class="cate-button-item">
				<view class="iconfont icon-RectangleCopy49 icon1"></view>
				<view>一键报修</view>
			</view>
			<view class="cate-button-item">
				<view class="iconfont icon-RectangleCopy20 icon2"></view>
				<view>巡检报告</view>
			</view>
			<view class="cate-button-item">
				<view class="iconfont icon-RectangleCopy38 icon3"></view>
				<view>电量预测</view>
			</view>
			<view class="cate-button-item">
				<view class="iconfont icon-RectangleCopy44 icon4"></view>
				<view>设备档案</view>
			</view>
			<view class="cate-button-item">
				<view class="iconfont icon-RectangleCopy52 icon5"></view>
				<view>抢修/缺陷</view>
			</view>
			<view class="cate-button-item">
				<view class="iconfont icon-RectangleCopy21 icon6"></view>
				<view>用电报告</view>
			</view>
		</view>
		
		<view class="company-info">
			<view class="">企业信息</view>
		</view>
		
		
		<view class="company-info-container">
			<view class="company-info-item">
				<view class="iconfont icon-RectangleCopy14 icon1"></view>
				<view class="company-info-summary">
					<view class="title">主变2台 2000kvA监测分路12个</view>
					<view class="desc">基本概况</view>
				</view>
			</view>
			<view class="company-info-item">
				<view class="iconfont icon-RectangleCopy55 icon2"></view>
				<view class="company-info-summary">
					<view class="title">今日1888.2 本月:32332 上月:34234</view>
					<view class="desc">电量累计(kWh)</view>
				</view>
			</view>
			<view class="company-info-item">
				<view class="iconfont icon-RectangleCopy6 icon3"></view>
				<view class="company-info-summary">
					<view class="title">本月:844234 本年:439543</view>
					<view class="desc">最大负荷(kW)</view>
				</view>
			</view>
			<view class="company-info-item border-none">
				<view class="iconfont icon-RectangleCopy18 icon4"></view>
				<view class="company-info-summary">
					<view class="title">0.996</view>
					<view class="desc">功率因素本月平均值</view>
				</view>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	export default {
		components:{
			
		},
		
		data() {
			return {
				noticeInfo:'2020年9月2020年9月2020年9月2020年9月2020年9月2020年9月2020年9月2020年9月2020年9月2020年9月2020年9月2020年9月2020年9月2020年9月2020年9月2020年9月2020年9月2020年9月2020年9月2020年9月2020年9月2020年9月',
				
				banner:[
					{
						id:'a',
						title:'用电知识',
						src:'/static/images/adv1.png'
					},
					{
						id:'b',
						title:'电工学堂',
						src:'/static/images/adv2.png'
					},
					{
						id:'c',
						title:'节能技术',
						src:'/static/images/adv3.png'
					},
					{
						id:'d',
						title:'企业新闻',
						src:'/static/images/adv4.png'
					}
				],
				imgTo: '',
				workingTime:0
			}
		},
		onLoad() {
			this.imgTo = this.banner[0].title
			this.workingTime = 660
		},
		methods: {
			handleSwiper:function(e) {
				console.log(e.detail.current)
				//console.log(this.banner[e.detail.current].id)
				this.imgTo = this.banner[e.detail.current].title
			},
			handleSwiperItem:function(item) {
				console.log(item)
			}
		}
	}
</script>

<style scoped lang="scss">
	$font-color:#333;
	.scgj-full-image {
		width: 100%;
		height: 100%;
	}
	.notice {
		width: 90%;
		margin: 10rpx auto;
		padding-bottom: 10rpx;
		color: $font-color;
		font-size: 16px;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		border-bottom: 0.5px solid #ccc;
	}
	
	.swiper {
			height: 300rpx;
		}
		.swiper-item {
			display: block;
			height: 300rpx;
			line-height: 300rpx;
			text-align: center;
		}
	
	.swiper-bar {
		width: 90%;
		margin: 10rpx auto;
		font-size: 12px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		
		.swiper-bar-note {
			flex: 1;
		}
		
		.wt-border {
			border-radius: 30%;
			background-color:#b0cfff;
			padding: 2px 5px;
			margin: 0 3px;
		}
	}
	
	.cate-button {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		
		.cate-button-item {
			width: 33.33%;
			text-align: center;
			font-size: 14px;
			color: $font-color;
			margin-top: 10px;
			
			.iconfont {
				font-size: 40px;
				&.icon1 {
					color: $uni-color-error;
				}
				&.icon2 {
					color: $uni-color-success;
				}
				&.icon3 {
					color: $uni-color-primary;
				}
				&.icon4 {
					color: #55007f;
				}
				&.icon5 {
					color: $uni-color-warning;
				}
				&.icon6 {
					color: #ff007f;
				}
			}
		}
	}
	
	.company-info {
		margin: 0 auto;
		margin-top: 15px;
		text-align: center;
		font-size: 14px;
		color: #fff;
		background-color: $uni-color-primary;
		padding: 5px 0;
	}
	
	.company-info-container {
		width: 90%;
		margin: 20px auto;
		
		.company-info-item {
			display: flex;
			justify-content: space-between;
			padding-bottom: 5px;
			margin-bottom: 5px;
			border-bottom: 0.5px solid #ccc;
			
			&.border-none {
				border-bottom: none;
			}
			
			.company-info-summary {
				margin-top: 6px;
				flex: 1;
				.title {
					color: $font-color;
					font-size: 14px;
				}
				.desc {
					color: #999;
					font-size: 12px;
					margin-top: 3px;
				}
			}
			
			.iconfont {
				font-size: 50px;
				
				&.icon1 {
					color: $uni-color-primary;
				}
				&.icon2 {
					color: $uni-color-warning;
				}
				&.icon3 {
					color: $uni-color-success;
				}
				&.icon4 {
					color: $uni-color-error;
				}
			}
		}
	}
</style>
