<template>
	<div style="background: #E9F0ED;">
		<mt-swipe :auto="4000" style="background: #fff;">
		  <mt-swipe-item v-for="item in items" :key="item.id">
		  	<img v-bind:src="item">
		  </mt-swipe-item>
		</mt-swipe>
		<div class="product">
			<h2>{{title}}</h2>
			<p>{{recommend}}</p>
			<div class="price">${{minprice}}~{{maxprice}}</div>
			<div class="product-type">
				规格
				<img src="../../static/more.png">
				<div>
					<span v-for="item in type">{{item.type}}、</span>
				</div>
			</div>
			<div class="product-fare">
				销售量： &nbsp;{{sale}}件
				<div>运费￥{{fare}}</div>
			</div>
		</div>
		<div class="shadow" v-show="shadowShow" @click="shadowHide()">
			<div class="shadow-product" @click.stop>
				<div class="product-head">
					<img :src="img">
					<div class="product-right">
						<h2>{{title}}</h2>
						<p>{{recommend}}</p>
						<div v-if="isShow">￥{{minprice}}~{{maxprice}}</div>
						<div v-else>￥{{price}}</div>
					</div>
				</div>
				<div class="product-standard">
					<span>规格</span>
					<div class="standard">
						<input type="button" v-for="(item,index) in type" :value="item.type" @click="getPrice({price:item.price,type:item.num},index)" :class="{'btn-active':index==isIndex}" />
					</div>
				</div>
				<div class="number">
					<div></div>
					<span class="cut" @click="cut">-</span><input type="text" :value="num" /><span class="add" @click="add">+</span>
				</div>
				
			</div>
		</div>
		<div class="btn">
			<span>
				<svg class="icon" aria-hidden="false">
					  <use xlink:href="#icon-zhuye"></use>
				</svg>
			</span>
			<span class="gouwuche">
				<svg class="icon" aria-hidden="false">
					  <use xlink:href="#icon-gouwuche"></use>
				</svg>
				<i>{{cartNum}}</i>
			</span>
			<a href="javascript:;" class="cart" @click="cart">加入购物车</a>
			<a href="javascript:;" class="buy" @click="buy">立即购买</a>
		</div>
		
	</div>
</template>

<script>
import store from '../store/store';
import { Toast } from 'mint-ui';
	export default{
		data(){
			return{
				items:[],
				title:'',
				recommend:'',
				type:[],
				minprice:0,
				maxprice:0,
				sale:0,
				fare:0,
				img:'',
				price:0,
				isShow:true,
				isIndex:-1,
				shadowShow:false,
				num:1,
				cartNum:0,
				kind:0
				
			}
		},
		mounted(){
			// 获取产品详情
        this.$http.get('/api/product/recommend',{
        		params:{
        			pid:this.pid
        		}
		  })
          .then((response)=>{
          	var res=response.data
          	var data_img=res.data_img;
          	var product=res.data;
          	for(var i=0;i<data_img.length;i++){
          		this.items.push(data_img[i].img);
          	}
          	this.title=product[0].title;
          	this.recommend=product[0].recommend;
          	this.fare=product[0].fare;
          	this.sale=product[0].sale;
          	this.img=product[0].img;
		  })
		  .catch(function (error) {
		    console.log(error);
		  })
		  // 获取产品类别详情
        this.$http.get('/api/product/type',{
        		params:{
        			pid:this.pid
        		}
		  })
          .then((response)=>{
          	var res=response.data;
          	var minprice=0,maxprice=0;
          	for(var i=0;i<res.length;i++){
          		if(res[i].type=='0'){
          			res[i].type='Mini包';
          			res[i].num='0';
          		}else if(res[i].type=='1'){
          			res[i].type='季度包';
          			res[i].num='1';
          		}else if(res[i].type=='2'){
          			res[i].type='半年包';
          			res[i].num='2';
          		}else if(res[i].type=='3'){
          			res[i].type='一年包';
          			res[i].num='3';
          		}
          		minprice=res[0].price;
          		maxprice=res[i].price;
          	}
          	this.minprice=minprice;
          	this.maxprice=maxprice;
          	this.type=res;
          	console.log(res)
		  })
		  .catch(function (error) {
		    console.log(error);
		  })
		  // 获取产品详情
        this.$http.get('/api/cart/num')
          .then((response)=>{
          	this.cartNum=response.data;
          	console.log(response);
		  })
		  .catch(function (error) {
		    console.log(error);
		  })
		},
		methods:{
			getPrice(msg,index){
				this.price=msg.price;
				this.isShow=false;
				this.isIndex=index;
				this.kind=msg.type;
				return false;
				console.log(index);
			},
			buy(){
				if(this.isIndex==-1&&this.shadowShow==true){
					Toast('请选择产品类型');
				}else if(this.isIndex!=-1&&this.shadowShow==true){
					Toast('跳转链接');
				}
				this.shadowShow=true;
				
			},
			shadowHide(){
				this.shadowShow=false
			},
			cut(){
				this.num-=1;
			},
			add(){
				this.num+=1;
			},
			cart(){
				if(this.isIndex==-1&&this.shadowShow==true){
					Toast('请选择产品类型');
				}else if(this.isIndex!=-1&&this.shadowShow==true){
					Toast('跳转链接');
					this.$http.get('/api/cart',{
						params:{
							price:this.price,
							title:this.title,
							recommend:this.recommend,
							img:this.img,
							num:this.num,
							fare:this.fare,
							type:this.kind,
							pid:this.pid
						}
					})
					.then((response)=>{
          	
				  })
				  .catch(function (error) {
				    console.log(error);
				  })
				}
				this.shadowShow=true;
			}
		},
		computed:{
　　　　　　pid(){
　　　　　　　return this.$route.query.pid
　　　　　}
　　　　}
	}
</script>
<style>
	.product{
		padding: .15rem;
		background: #fff;
		margin-top:.15rem
	}
	.product h2{
		font-size: .18rem;
	}
	.product p{
		font-size: .14rem;
		margin:.05rem 0;
		color:#959595;
	}
	.product .price{
		font-size: .13rem;
		color:#D94A25;
	}
	.product-type{
		color:#A8A8A8;
		border-top: .01rem solid #C7C7C7;
		margin-top: .15rem;
		padding: .1rem 0;
		font-size: .14rem;
	}
	.product-type div{
		color:#000;
		float: right;
		overflow: hidden;
	}
	.product-type img{
		margin-top: -5px;
		float: right;
	}
	.buy{
		width:35%;
		height:.5rem;
		line-height: .5rem;
		color:#fff;
		background: #FF5353;
		font-size: .2rem;
		text-align: center;
		display: block;
		text-decoration: none;
	}
	.product-fare{
		font-size: .14rem;
		color:#000;
		overflow: hidden;
		border-top: .01rem solid #C7C7C7;
		border-bottom: .01rem solid #C7C7C7;
		padding: .1rem 0;
	}
	.product-fare div{
		color:#A8A8A8;
		float: right;
	}
	.shadow{
		width:100%;
		height:100%;
		position:absolute;
		top:0;
		left:0;
		background: rgba(0,0,0,0.7);
	}
	.shadow-product{
		width:100%;
		background: #fff;
		position:absolute;
		left: 0;
		bottom:.9rem;
	}
	.product-head{
		overflow: hidden;
		border-bottom: .01rem solid #C7C7C7;
		padding: .1rem;
	}
	.product-head img{
		width:1rem;
		height:1rem;
		float: left;
		margin-right: .2rem;
	}
	.product-right{
		float: left;
	}
	.product-right h2{
		font-size: .16rem;
	}
	.product-right p{
		font-size: .14rem;
		color: #949494;
		margin: .1rem 0;
	}
	.product-right div{
		font-size: .14rem;
		color:#FF5353;
	}
	.product-standard{
		font-size: .14rem;
		overflow: hidden;
		color:#8E8E8E;
		padding: 0rem .1rem;
		padding-top: .15rem;
	}
	.product-standard span{
		font-size: .14rem;
		float: left;
		margin-right: .2rem;
	}
	.standard{
		width:70%;
		float: left;
	}
	.standard input{
		width:.6rem;
		height:.3rem;
		line-height: .3rem;
		color:#8E8E8E;
		text-align: center;
		border: .01rem solid #8E8E8E;
		border-radius: .05rem;
		background: #fff;
		margin: 0 .05rem .05rem;
	}
	.standard .btn-active{
		color:#fff;
		background: #FF5353;
		border: .01rem solid #FF5353;
	}
	.number{
		font-size: .12rem;
	    margin: 0 auto;
	}
	.number input{
		width:.5rem;
		height: .25rem;
		line-height: .25rem;
		border-radius: 3px;
		text-align: center;
		border: .01rem solid #8E8E8E;
		border-left:none;
		border-right:none;
	}
	.number span{
		width:.25rem;
		height: .25rem;
		line-height: .25rem;
		display: inline-block;
		border: .01rem solid #8E8E8E;
		text-align: center;
		color:#8E8E8E;
		border-radius: 3px;
		outline:none;
	}
	.number .cut{
		margin-right: -.03rem;
		position: relative;
	}
	.number .add{
		margin-left: -.03rem;
	}
	.cart{
		width:35%;
		height:.5rem;
		line-height: .5rem;
		color:#000;
		background: #fff;
		font-size: .2rem;
		text-align: center;
		display: block;
		text-decoration: none;
	}
	.btn{
		width:100%;
		overflow: hidden;
		position:fixed;
		bottom:.4rem;
		left:0;
	}
	.btn a{
		float: left;
	}
	.btn span{
		width:15%;
		height:.5rem;
		line-height: .5rem;
		text-align: center;
		display: inline-block;
		float: left;
		background: #fff;
		border-right: .01rem solid #EEEEEE;
		box-sizing: border-box;
		-webkit-box-sizing: border-box;
	}
	.btn .icon{
		margin: .15rem auto;
	}
	.btn .gouwuche{
		position: relative;
	}
	.btn i{
		position: absolute;
	    top: 12px;
	    right: 5px;
	    height: 13px;
	    width: 13px;
	    border-radius: 50%;
	    background: #fe4070;
	    color: #fff;
	    line-height: 13px;
	    font-size: 10px;
	    font-style: normal;
	}
	.number div{
		width:.48rem;
		height:.2rem;
		margin-left: .15rem;
		float: left;
	}
</style>