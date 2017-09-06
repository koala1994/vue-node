exports.sendMsg = function (code,data,sum){
	var arr=["正常","失败"]
	var txt = {
		code:code?code:0,
		msg:arr[code?code:0],
		data:data,
		sum:sum
	}
	return txt
}
exports.handle= function (data){
	//var newData=[]
	//console.log(data)
	for(var i=0;i<data.length;i++){
		for(var d in data[i]){
			//console.log(d)
			 var obj={};
			  var t
			//console.log(data[d])
			// console.log(d.split('_'))
			if(d.indexOf('_')!=-1){
				//console.log(d.split('_')[0].length)
				//console.log(d.substr(d.split('_')[0].length,2))
				t=d.replace(d.substr(d.split('_')[0].length,2),d.substr(d.split('_')[0].length+1,1).toUpperCase())
				//console.log(d)
				obj[t]=data[i][d]
				console.log(obj)
				console.log(obj[t])
				// console.log(obj)
				// console.log(d.split('_')[0].length)
				// console.log(d.substr(d.split('_')[0].length,2))
				// console.log(d.split('_')[0].length+1)
				// console.log(d.substr(d.split('_')[0].length+1,1).toUpperCase())
				// console.log(d)
				// console.log(d.replace(d.substr(d.split('_')[0].length,2),d.substr(d.split('_')[0].length+1,1).toUpperCase()))
				//console.log(obj[d.replace(d.substr(d.split('_')[0].length,2),d.substr(d.split('_')[0].length+1,1).toUpperCase())])
			}	
			// obj[d.replace(d.substr(d.split('_')[0].length,2),d.substr(d.split('_')[0].length+1,1).toUpperCase())]=data[i]
			//console.log(data[i])
		}
	}
	
	// for(var i in data){
	// 	for(var j in data[i]){
	// 		var h=data[i][j]
	// 		//console.log(data[i][j])
	// 		var arr=j.split("")
	// 		var obj=''
	// 		for(var t=0;t<arr.length;t++){
	// 			if(arr[t]=='_'){
	// 				arr[t+1]=arr[t+1].toUpperCase()
	// 			}
	// 			obj+=arr[t]
	// 		}
	// 		j=obj;
	// 		j=j.replace(/\_/g,'');
	// 		//console.log(h)
	// 		newData[i][j]=h
	// 		//console.log(j)
	// 	}
	// }
	// return newData
}