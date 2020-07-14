<template>
	<view>
		<view class="uni-form-wrapper">
			<form @submit="loginFormSubmit">
				<view class="uni-form-item">
					<view class="uni-form-label">账号</view>
					<input 
					class="uni-input"
					type="text"
					name="account"
					:value="inputOriginValue"
					@change="trimInput"
					>
				</view>
				<view class="uni-form-item">
					<view class="uni-form-label">密码</view>
					<input 
					class="uni-input"
					name="password"
					password
					:value="passwordOriginValue"
					>
				</view>
				<view class="uni-form-item no-border">
					<view class="uni-form-label switch-label">记住密码</view>
					<switch 
					class="uni-form-switch" 
					name="remember"
					checked 
					@change="switchRemember" 
					color="#007AFF"
					/>
				</view>
				<view class="uni-form-item no-border">
					<button 
					class="uni-form-button" 
					type="default"
					form-type="submit"
					>登录</button>
				</view>
			</form>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				inputOriginValue:'',
				passwordOriginValue:'',
				rememberValue:true
			}
		},
		methods:{
			switchRemember: function(e) {
				console.log(e)
			},
			
			// 输入的时候清除空格
			trimInput: function(e) {
				this.inputOriginValue = e.detail.value.trim()
			},
			
			// login form
			loginFormSubmit:function(e) {
				//console.log(e.detail.value)
				if(this.iGlobal.loginCheck(e.detail.value)) {
					//console.log(e.detail.value)
					
					this.iGlobal.request({
						url:'/applogin',
						method:'POST',
						data:{
							loginName:e.detail.value.account,
							passWord:e.detail.value.password,
							rememberMe:e.detail.value.remember,
							apphttp:this.iGlobal.appInfo.apphttp
						}
					}).then((res) => {
						if(res.success === '0'){
							this.iGlobal.showToast(res.message)
							return false
						}
						if(res.success === '1'){
							console.log(res.dataList)
						}
					})
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.uni-form-wrapper {
		padding: 8px 13px;
		padding-top: 30px;
		.uni-form-item {
			color: $uni-text-color;
			display: flex;
			flex-flow: row nowrap;
			padding: 10px 0;
			border-bottom: 0.5px solid $uni-text-color-disable;
			&.no-border {
				border-bottom: none;
			}
			
			font-size: $uni-font-size-base;
			
			.uni-form-label {
				width: 40px;
			}
			
			.uni-input,.switch-label {
				flex: 1;
			}
			
			.uni-form-label,.uni-input {
				color: $uni-text-color;
			}
			
			.uni-form-switch {
				transform: scale(0.7);
			}
			
			.uni-form-button {
				flex: 1;
				background-color: $uni-color-primary;
				color: $uni-bg-color;
				font-size: 16px;
				border-color: $uni-color-primary;
				letter-spacing: 5px;
			}
		}
	}
</style>
