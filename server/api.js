// 可能是我的node版本问题，不用严格模式使用ES6语法会报错
"use strict";
const express = require('express');
const router = express.Router();
const mysql=require('./mysql');
const send = require('./alert');

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

//// 创建账号接口
//router.post('/api/login/createAccount',(req,res) => {
//	var user=req.body;
//	console.log(user);
//	var sql='INSERT INTO login_user (nickname,pwd) VALUES (?,?);';
//		mysql(sql,[user.nickname,user.pwd],function(err,blog,fields){
//			if(err) console.log(err)
//			console.log('成功注册')
//		})
//	});
//
//// 获取已有账号接口
//router.get('/api/login/getAccount',(req,res) => {
//	res.render();
//	var sql='SELECT * FROM login_user WHERE nickname = ? and pwd = ?;'; 
//	var user=req.query;
//	mysql(sql,[user.nickname,user.pwd],function(err,blog,fields){
//		console.log(req.query);
//		if(err) console.log(err);
//		console.log(blog.length);
//		if(blog.length>0){
//			//req.session.uu=blog;
//			console.log('登录成功')
//		}else{
//			console.log('登录失败')
//		}
//	})
//
//});
//// 获取数据信息
//router.get('/api/login/getUser',(req,res) => {
//	var sql='SELECT nickname,pwd FROM login_user;';
//	mysql(sql,function(err,blog,fields){
//			if(err) console.log(err);
//			console.log(blog.length);
//			res.send(blog)
//	})
//	});
// 获取产品列表信息
router.post('/api/product',(req,res) => {
	var sql='SELECT * FROM product WHERE title REGEXP ? ORDER BY pid LIMIT ?,?;';
	var user=req.body;
	console.log(user);
	mysql(sql,[user.querys?user.querys:'.',parseInt(user.pageSize),parseInt(user.limit)],function(err,blog,fields){
		if(err) console.log(err);
		res.send(send.sendMsg('0',blog))
	})

});
// 获取产品列表信息
router.get('/api/product/recommend',(req,res) => {
	var sql='SELECT * FROM product_img WHERE pid = ?;'; 
	var sql1='SELECT * FROM product WHERE pid = ?;'; 
	var user=req.query;
	var arr={};
	//var sql='SELECT pid,title,img,price,recommend FROM product LIMIT 1;';
	mysql(sql,[user.pid],function(err,blog,fields){
		if(err) console.log(err);
		arr.data_img=blog;
			mysql(sql1,[user.pid],function(err,blog,fields){
			if(err) console.log(err);
			arr.data=blog;
			res.send(send.sendMsg('0',arr))
		})
	})
	
console.log(arr);
});
// 获取产品类型信息
router.get('/api/product/type',(req,res) => {
	var sql='SELECT type,price FROM product_type WHERE pid = ? ORDER BY type;'; 
	var user=req.query;
	//var sql='SELECT pid,title,img,price,recommend FROM product LIMIT 1;';
	mysql(sql,[user.pid],function(err,blog,fields){
		if(err) console.log(err);
		res.send(send.sendMsg('0',blog));
	})
});
// 购物车信息录入
router.get('/api/cart',(req,res) => {
	var sql='INSERT INTO cart (pid,title,recommend,type,num,img,price,fare) VALUES (?,?,?,?,?,?,?,?);'; 
	var user=req.query;
	console.log(user);
	//var sql='SELECT pid,title,img,price,recommend FROM product LIMIT 1;';
	mysql(sql,[user.pid,user.title,user.recommend,user.type,user.num,user.img,user.price,user.fare],function(err,blog,fields){
		if(err) console.log(err);
		//res.send(blog);
	})
});
// 获取购物车有几条数据
router.get('/api/cart/num',(req,res) => {
	var sql='SELECT * from cart';
	mysql(sql,function(err,blog,fields){
			if(err) console.log(err);
			//console.log(blog.length);
			res.send(''+blog.length)
	})
});
module.exports = router;