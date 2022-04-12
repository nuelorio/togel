var http = require('http');
var formidable = require('formidable');

port = 3000;

var arr0 = [];
var arr1 = [];
var arr2 = [];
var arr3 = [];
var arr4 = [];
var arr5 = [];
var arr6 = [];
var arr7 = [];
var arr8 = [];
var arr9 = [];
var head = [];


http.createServer(function (req, res) {
	if (req.url == '/togel') {
		var form = new formidable.IncomingForm();
		form.parse(req, function (err, fields) {
			var num = fields.inputTogel;
			var dirtyArr = num.split('');
			var arr = Array.from(new Set(dirtyArr));
			console.log(arr.length);
			
			combine6D();
			takeHead(arr);
			
			for (var i = 0; i<head.length; i++) res.write(head[i] + ' ');
			res.write("\n\n");
			
			res.end();
		});
	} else {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write('<form action="togel" method="post" enctype="multipart/form-data">');
		res.write('<input type="number" name="inputTogel"><br>');
		res.write('<input type="submit">');
		res.write('</form>');
		return res.end();
	}
}).listen(port);

function combine6D(){
	var a = ['0','1','2','3','4','5','6','7','8','9'];
	var random;
	var check;
	var deValue = [];
	for(var j = 0; j<10; j++){
		for(var k = 0; k<10; k++){
			deValue[deValue.length] = a[j] + a[j] + a[j] + a[j] + a[j] + a[k];
			deValue[deValue.length] = a[j] + a[j] + a[j] + a[j] + a[k] + a[j];
			deValue[deValue.length] = a[j] + a[j] + a[j] + a[k] + a[j] + a[j];
			deValue[deValue.length] = a[j] + a[j] + a[k] + a[j] + a[j] + a[j];
			deValue[deValue.length] = a[j] + a[k] + a[j] + a[j] + a[j] + a[j];
			deValue[deValue.length] = a[k] + a[j] + a[j] + a[j] + a[j] + a[j];
		}
	}
	
	for(var i = 0; i<a.length; i++){
		for(var j = 0; j<a.length; j++){
			for(var k = 0; k<a.length; k++){
				for(var l = 0; l<a.length; l++){
					for(var m = 0; m<a.length; m++){
						for(var n = 0; n<a.length; n++){
							random = a[i] + a[j] + a[k] + a[l] + a[m]+ a[n];
							if(random >= 000000 &&random < 100000){
								check = checkDe(random, deValue);
								if(check == 1){
									arr0[arr0.length] = random; 
								}
							} 
							else if(random >= 100000 &&random < 200000){
								check = checkDe(random, deValue);
								if(check == 1){
									arr1[arr1.length] = random; 
								}
							} else if(random >= 200000 &&random < 300000){
								check = checkDe(random, deValue);
								if(check == 1){
									arr2[arr2.length] = random; 
								}
							} else if(random >= 300000 &&random < 400000){
								check = checkDe(random, deValue);
								if(check == 1){
									arr3[arr3.length] = random; 
								}
							} else if(random >= 400000 &&random < 500000){
								check = checkDe(random, deValue);
								if(check == 1){
									arr4[arr4.length] = random; 
								}
							} else if(random >= 500000 &&random < 600000){
								check = checkDe(random, deValue);
								if(check == 1){
									arr5[arr5.length] = random; 
								}
							} else if(random >= 600000 &&random < 700000){
								check = checkDe(random, deValue);
								if(check == 1){
									arr6[arr6.length] = random; 
								}
							} else if(random >= 700000 &&random < 800000){
								check = checkDe(random, deValue);
								if(check == 1){
									arr7[arr7.length] = random; 
								}
							} else if(random >= 800000 &&random < 900000){
								check = checkDe(random, deValue);
								if(check == 1){
									arr8[arr8.length] = random; 
								}
							} else{
								check = checkDe(random, deValue);
								if(check == 1){
									arr9[arr9.length] = random; 
								}
							}
						}
					}
				}
			}
		}
	}
}

function checkDe(a,b){
	for(var o = 0; o<b.length; o++){
		if(a===b[o]){
			return 0;
		}
	}
	return 1;
}

function takeHead(a){
	var random;
	var check;
	for(var i =0; i<a.length; i++){
		if(a[i]==0){ 
			putHead(arr0);
		}else if(a[i]==1){
			putHead(arr1);
		}else if(a[i]==2){
			putHead(arr2);
		}else if(a[i]==3){
			putHead(arr3);
		}else if(a[i]==4){
			putHead(arr4);
		}else if(a[i]==5){
			putHead(arr5);
		}else if(a[i]==6){
			putHead(arr6);
		}else if(a[i]==7){
			putHead(arr7);
		}else if(a[i]==8){
			putHead(arr8);
		}else if(a[i]==9){
			putHead(arr9);
		}
	}
}

function putHead(a){
	for(var j = 0; j<50; j++){
		random = a[Math.floor(Math.random()*a.length)];
		check = checkDe(random, head);
		if(check == 1){
			head[head.length] = random; 
		}else{
			j--;
		}
	}
}