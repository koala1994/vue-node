<template>
	<div class="main index">
		<list :list="list" :select="select"></list>
	  <div class="rolling">
	  	<p>咕噜公告：</p>
	  	<marquee direction="left" scrollamount="10">吃货网于4月27日开发！！</marquee>
	  </div>
	  <span class="index-img"><img src="../../static/img/allgood.png"></span>
	  <div class="product-main">
		  <div class="content" v-for="item in product">
	  		<router-link :to="{ path: '/recommend', query: { pid: item.pid }}">
		  		<div class="content-left">
		  		<img :src="item.img">
			  	</div>
			  	<div class="content-right">
			  		<h2>{{item.title}}</h2>
			  		<p>{{item.recommend}}</p>
			  		<div class="love">
						  <div class="love-left">
							<img src="../../static/img/love.png">
						  	<span>{{item.praiseNum}}</span>
						  </div>
						  <div class="love-right">
							  <img src="../../static/img/hand.png">
						  	<span>{{item.price}}</span>
						  </div>
					</div>
			  	</div>
		  	</router-link>
	  	</div>
	  </div>
	  
		<div class="loading" v-show="loading">
			<span style="vertical-align:middle;display:inline-block;font-size:14px;">{{loadText}}&nbsp;&nbsp;</span>
			<inline-loading v-if="loading && loadText=='加载中'"></inline-loading>
	    </div>
  </div>
</template>
<script>
import store from '../store/store';
import List from '../components/nav';
 import {Swiper,SwiperItem,InlineLoading } from 'vux';
	export default{
		components:{
			Swiper,
			SwiperItem,
			List,
			InlineLoading	
		},
		data(){
			return{
				items:["../static/img/l1.jpg","../static/img/l2.jpg"],
				product:[],
				limit:3,
				pageIndex:0,
				pageSize:0,
				loading:false,
				loadText:'加载中',
				allLoaded:false,
				select:0,
				list:[
                        {
                            name:'精选',
                            path:'a',
							src:'../static/img/banner1.jpg'
                        },
                        {
                            name:'美食',
                            path:'/food',
							src:'../static/img/banner2.jpg'
                        },
                        {
                            name:'电影',
                            path:'a',
							src:'../static/img/banner3.jpg'
                        },
                        {
                            name:'酒店',
                            path:'a',
							src:'../static/img/l2.jpg'
                        },
                        {
                            name:'外卖',
                            path:'a',
							src:'../static/img/l1.jpg'
                        },
					],
			}
		},
		mounted(){
			var self=this;
			this.init()
			$(function(){
					$(window).scroll(function(){
						if($(window).height()+$(window).scrollTop()>=$(document).height()){
							if(self.loadText!='数据全部加载完毕'){
								self.loading=true;
								self.loadText='加载中'
								setTimeout(function(){
									self.init()
								},1000)
							}
						}
					})
				})
       },
       methods:{
		   init(){
				this.$http.post('/api/product',{limit:this.limit,pageSize:this.pageSize})
				.then((response)=>{
					if(response.data.length==0){
						this.loadText='数据全部加载完毕'
					}else{
						this.loading=false
					}
					this.pageIndex+=1;
					this.pageSize=this.pageIndex*this.limit;
					for(var i=0;i<response.data.length;i++){
						this.product.push(response.data[i]);
					}
				})
				.catch( (error) => {
					console.log(error);
				})
			},
			loadhref(id){
				alert(id);
				this.$store.commit('show',id);
			}
	}
}
</script>
<style>
.index .vux-slider > .vux-indicator, .vux-slider .vux-indicator-right{
	bottom:-50px;
}
</style>
<style scoped lang="less">
.loading{
	font-size: .14rem;
    text-align: center;
    height: .5rem;
    line-height: .5rem;
}
.vux-center{
	font-size:.14rem;
}
.content-left{
	width:1rem;
	height:1rem;
	float: left;
}
.content-left img{
	width:100%;
	height:100%;
	vertical-align: top;
}
.content-right{
	width: 70%;
	height:1rem;
	position: relative;
	padding: .03rem .1rem .1rem .1rem;
	box-sizing: border-box;
	-webkit-box-sizing: border-box;
	float: left;
	font-size: 0;
	    border-left: 1px dashed #eee;
}
.content-right h2,.content-right p{
	color:#000;
	font-weight: normal
}
.content-right p{
	font-size: .12rem;
	color:#666;
	overflow: hidden; 
	display: -webkit-box;
	text-overflow: ellipsis;
	-webkit-line-clamp:2;
	-webkit-box-orient:vertical; 
	margin-top: .03rem
}
.content-right>div{
	font-size:.13rem;
	position: absolute;
	bottom: .05rem;
	left: .1rem;
	color:#FE4070;
	font-style:normal;
	
}
.content-right .love img{
	vertical-align: middle;
	width:30%;
	padding-right:.03rem;
}
.love{
	width:90%;
}
.love .love-left, .love .love-right{
	float: left;
}
.love .love-right{
	float: right;
}
.love .love-right span{
	color:#666;
}
.content{
	height:1rem;
	border-bottom: .1rem solid #eee;
	background: #fff;
}
.main{
	padding-bottom: .35rem;
}
.lunbo-img{
	width:100%;
	height:100%;
}
.rolling{
	width:100%;
	height:.5rem;
	font-size:0;
	padding: .05rem;
	background: #fff;
	margin-bottom: .1rem;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
}
.rolling p{
	font-size: .14rem;
	color:#FF2D55;
}
.rolling marquee{
	width:100%;
	font-size: .12rem;
	color:#9B9B9B;
	height:.4rem;
}
.index-img{
	width:100%;
	display: block;
	border-bottom:.1rem solid #eee;
}
.index-img img{
	width:100%;
	display:block;
}
.swiper img{
	width:100%;
	height:1.8rem;
}
span{
	font-size: .12rem;
}
</style>