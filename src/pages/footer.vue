<template>
		<div class="footer" >
			<ul>
			    <li>
			      <router-link to="/index">
			      	<svg class="icon" aria-hidden="false">
					  <use xlink:href="#icon-home"></use>
					</svg>
					<span class="text">首页</span>
			      </router-link>
			    </li>
			    <li>
			      <router-link to="/order" :class="classBorder">
			      	<svg class="icon" aria-hidden="false">
					  <use xlink:href="#icon-gouwucheman"></use>
					</svg>
					<span class="text">购物车</span>
			      </router-link>
			    </li>
			    <li>
			      <router-link to="/person">
			      	<svg class="icon" aria-hidden="false">
					  <use xlink:href="#icon-geren"></use>
					</svg>
					<span class="text">个人</span>
			      </router-link>
			    </li>
			  </ul>
		</div>
</template>
<script>
import { bus } from '../store/data.js'
import '../../static/css/icon/iconfont.js'
export default{
	data(){
		return{
			classBorder:{
				'border1':true
			},
			fooCount:0
		}
	},
	methods:{
//		addbar(){
//			  //alert(this.$parent.$data.username +"==="+ this.$parent.$data.userarea);
//              this.$store.commit("showUserName");
//              console.log(this.$store.state.user_name);
//		}
	}
}
</script>
<style>
	*{
		margin:0;
		padding: 0;
	}
	html,body{
		font-size: 100px;
	}
	.icon {
	   width: 1em; height: 1em;
	   vertical-align: -0.15em;
	   fill: currentColor;
	   overflow: hidden;
	   display: block;
    	margin: 0 auto;
    	font-size: .2rem;
    	margin-bottom: .02rem;
	}
	.footer{
		width: 100%;
		position: fixed;
		left:0;
		bottom:0;
		z-index: 999;
	}
	.active{
		background: #fff;
		color:#FF2D55 !important;
	}
	.border1{
	border-left: .01rem solid #fff;
	border-right: .01rem solid #fff;
	}
	.footer ul{
		font-size: 0;
		overflow: hidden;
	}
	.footer ul li{
		width:33.3%;
		height:.4rem;
		line-height: .4rem;
		color:#000;
		text-align: center;
		float: left;
		list-style: none;
		background: #fff;
		box-sizing: border-box;
	}
	.footer ul li a{
		width: 100%;
		height: .4rem;
		font-size: .15rem;
		color:#9B9B9B;
		text-decoration: none;
		display: block;
		padding-top: .03rem;
	}
	.footer .text{
		font-size: .12rem;
	    display: block;
	    padding: 0;
	    margin: 0;
	    line-height: 1;
	}
</style>