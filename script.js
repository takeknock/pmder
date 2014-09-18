var total;
var lap;
var c=0;
var flg;
var rep;
var ar=[25,5,25,5,25,5,25,30];

/*
function sleeps(g){
	setTimeout(function(){
		g.next('I woke up at '+ new Date());
	},1000);
}

var g = (function (){
	console.log(yield sleep(g));	
	console.log(yield sleep(g));	
	console.log(yield sleep(g));	
})();

g.next();
*/

function start(){
	total = setInterval("countUp()",1000);
	repeat();
/*
	for(;;){
		if(c>0 && c%5==0){
			flg=1;
			lap = setInterval("countDown(30)",1000);
			sleep(30);
		}else if(c%2==0){
			flg=1;
			lap = setInterval("countDown(25)",1000);
			sleep(25);
		}else if(c%2==1){
			flg=1;
			lap = setInterval("countDown(5)",1000);
			sleep(5);
		}
		c+=1;
	}*/
}

function repeat(){
	flg=1;
	lap=setInterval("countDown(25)",1000);
	setTimeout(function(){
	flg=1;
		lap=setInterval("countDown(5)",1000);
		setTimeout(function(){
			flg=1;
			lap=setInterval("countDown(25)",1000);
			setTimeout(function(){
				flg=1;
				lap=setInterval("countDown(5)",1000);
				setTimeout(function(){
					flg=1;
					lap=setInterval("countDown(25)",1000);
					setTimeout(function(){
						flg=1;
						lap=setInterval("countDown(5)",1000);
						setTimeout(function(){
							flg=1;
							lap=setInterval("countDown(25)",1000);
							setTimeout(function(){
								flg=1;
								lap=setInterval("countDown(25)",1000);
								setTimeout(function(){
									repeat();	
								},1800000)
							},1500000)		
						},300000)
					},1500000)	
				},30000)	
			},1500000)	
		},300000)
	},1500000);


}

function countDown(limit){
	var mid = "#min2";
	var sid = "#sec2";
	console.log("countDown");
	if(limit==30){
		$("h1").html("大休憩中");
	}else if (limit==25){
		$("h1").html("作業中");
	}else if (limit==5){
		$("h1").html("5分休憩中");
	}
	if(flg==1){
		console.log("initialize 'min' and 'sec'");
		var min=limit;
		var sec=0;
		$(mid).html(limit);
		$(sid).html(0);
		flg=0;
	}else{
		var min=$(mid).html();
		var sec=$(sid).html();
	}

	min = parseInt(min);
	sec = parseInt(sec);
	
	if(min==0 && sec==0){
		reset(mid,sid);	
	}

	var int = min*60+sec-1;
	$(mid).html(Math.floor(int/60));
	$(sid).html(int%60);
}

function reset(mid,sid){
	$(mid).html("0");
	$(sid).html("0");
	flg=0;
	clearInterval(lap);
}

function countUp(){
	console.log("countUp");
	var hid = "#hour1";
	var mid = "#min1";
	var sid = "#sec1";
	
	var hour=$(hid).html();
	var min=$(mid).html();
	var sec=$(sid).html();
	//console.log(min);
	hour = parseInt(hour);
	min = parseInt(min);
	sec = parseInt(sec);
	
	var int = hour*3600+min*60+sec+1;
	$(hid).html(Math.floor(int/3600));
	$(mid).html(Math.floor(int/60));
	$(sid).html(int%60);

}

function pause(){
	stop = new Date().getTime();
	console.log(stop);

}

function sleep(t){
	//t : minutes
	var s = new Date().getTime();
	var g = new Date().getTime();
	while(d2<d1+60*1000*t)
		d2=new Date().getTime();
	return;
}
