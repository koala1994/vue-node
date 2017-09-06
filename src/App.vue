<template>
	<div id="app">
		<top :haha="3123"></top>
	  <router-view></router-view>
	</div>
</template>
<script>
import top from './pages/footer'
export default{
	components:{
		top:top
	},
	data(){
		return{
		}
	},
	methods:{

	}
}
</script>
<style scoped>
	*{
		margin:0;
		padding: 0;
	}
	html,body{
		font-size: 100px;
		background: #F2F2F2;
	}
	.footer{
		width: 100%;
		position: fixed;
		left:0;
		bottom:0;
	}
	.footer ul{
		font-size: 0;
		overflow: hidden;
	}
	.footer ul li{
		width:33.3%;
		height:.35rem;
		line-height: .35rem;
		color:#000;
		text-align: center;
		float: left;
		list-style: none;
		background: #58B7FF;
		box-sizing: border-box;
	}
	.footer ul li a{
		font-size: .15rem;
		color:#324057;
		text-decoration: none;
	}
</style>
<style lang="less">
	@import '~vux/src/styles/reset.less';
</style>