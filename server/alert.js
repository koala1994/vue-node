exports.sendMsg = function (code,data,sum){
	var arr=["正常","失败"]
	var handle=function(data){
		var newData=[]
		var obj;
		for(var i=0;i<data.length;i++){
				obj={};
			for(var d in data[i]){
				var t
				if(d.indexOf('_')!=-1){
					t=d.replace(d.substr(d.split('_')[0].length,2),d.substr(d.split('_')[0].length+1,1).toUpperCase())
					obj[t]=data[i][d]
				}else{
					obj[d]=data[i][d]
				}
			}
			newData.push(obj)	
		}
		return newData
	};
	var txt = {
		code:code?code:0,
		msg:arr[code?code:0],
		data:handle(data),
		sum:sum
	}
	return txt
}
// exports.handle= function (data){
// 	var newData=[]
// 	var obj;
// 	//console.log(data)
// 	for(var i=0;i<data.length;i++){
// 			obj={};
// 		for(var d in data[i]){
// 			  var t
// 			if(d.indexOf('_')!=-1){
// 				t=d.replace(d.substr(d.split('_')[0].length,2),d.substr(d.split('_')[0].length+1,1).toUpperCase())
// 				obj[t]=data[i][d]
// 			}else{
// 				obj[d]=data[i][d]
// 			}
// 		}
// 		newData.push(obj)	
// 	}
// 	return newData
// }