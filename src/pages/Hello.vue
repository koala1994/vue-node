<template>
	<div>
		<input class="form-control" id="inputEmail3" placeholder="请输入账号" v-model="nickname" v-on:change="userNameChange">
		<input type="password" class="form-control" id="inputPassword3" placeholder="请输入密码" v-model="pwd">
		<button type="submit" class="btn btn-default" >登录{{fooCount}}</button>
		<button type="submit" class="btn btn-default" >注册</button>
	</div>
</template>

<script>
import { bus } from '../store/data.js'
	var qs = require('qs');
    export default {
    data() {
        return {
            nickname : '',
            pwd : '',
            msg:'',
            fooCount:''
        }
    },
    created () {
	  bus.$on('tip', (text) => {
	    this.fooCount=text;
	  })
	},
    methods:{
            userNameChange(){
                //this.$emit("childChange","username",this.username)
                console.log("1");
                this.$store.state.user_name = this.nickname;
                
               
            }
        }
//  created() {
//  Hub.$on('change', (value) => { //Hub接收事件
//      this.msg = value;
//      console.log(this.msg);
//  });
//},
//  methods:{
//    login() {
//      // 获取已有账号密码
//      this.$http.get('/api/login/getAccount',{
//      	params:{
//      		nickname : this.nickname,
//      		pwd : this.pwd
//      	}
//      })
//        .then(function (response) {
//		    console.log(response);
//		  })
//		  .catch(function (error) {
//		    console.log(error);
//		  })
//      },
//    registered(){
//    	//创建账号密码
//      this.$http.post('/api/login/createAccount',qs.stringify({
//      		nickname : this.nickname,
//  			pwd : this.pwd
//      }))
//        .then(function (response) {
//		    console.log(response);
//		  })
//		  .catch(function (error) {
//		    console.log(error);
//		  })
//    }
//    }
    }
</script>