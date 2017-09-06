//var mysql=require('mysql');//调用Mysql模块
//
////创建一个connection
//var connection=mysql.createConnection({
//	host:'localhost',  //主机
//	user:'root',   //mysql认证用户名
//	password:'58384810', //mysql认证用户密码
//	database:'game',
//	port:'3306'  //端口号
//});
//
////创建一个connect
//connection.connect(function(err){
//	if(err){
//		console.log('[query]-:'+err);
//		return;
//	}
//		console.log('[connection connect] succeed!');
//});
//
//var sql='select * from game_user';
//
//connection.query(sql,function(err,result){
//	if(err){
//		console.log(err);
//		return;
//	}
//	console.log(result);
//})
//connection.end();
var mysql=require('mysql');

var comm=mysql.createPool({
	host:'localhost',
	user:'root',
	password:'123456',
	database:'home',
	port:'3306'
});

var query=function(sql,obj,callback){
	comm.getConnection(function(err,conn){
		if(err){
			callback(err,null,null);
		}else{
			conn.query(sql,obj,function(qer,blog,fields){
				//释放链接
				conn.release();
				//事件驱动回调
				callback(qer,blog,fields)
			})
		}
	})
}
module.exports=query;
//pool.getConnection(function(err, connection){
//connection.query( “select * from table1”,  function(err, rows){
//    if(err)    {
//        throw err;
//    }else{
//        console.log( rows );
//    }
//});
//
//connection.release();
//});g