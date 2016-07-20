// JavaScript Document

window.onload=function(){
	var oBox=document.getElementById('box');
	var oDiv=oBox.getElementsByTagName('div')
	for(var i=0; i<oDiv.length; i++){
		(function(i){
			oDiv[i].onmouseenter=function(ev){
				var oEvent=ev || event;
				var n=getN(oEvent,i);
				var oSpan=oDiv[i].children[0];
				switch(n){
					case 0://右
						oSpan.style.top=0;
						oSpan.style.left=260+'px';
						break;
					case 1://下
						oSpan.style.top=375+'px';
						oSpan.style.left=0;
						break;
					case 2://左
						oSpan.style.top=0;
						oSpan.style.left=-260+'px';
						break;
					case 3://上
						oSpan.style.top=-375+'px';
						oSpan.style.left=0;
						break;
				}
				move(oSpan,{top:0,left:0})
			}
			oDiv[i].onmouseleave=function(ev){
				var oEvent=ev || event;
				var n=getN(oEvent,i);
				var oSpan=oDiv[i].children[0];
				switch(n){
					case 0:
						move(oSpan,{top:0,left:260})
						break;
					case 1:
						move(oSpan,{top:375,left:0})
						break;
					case 2:
						move(oSpan,{top:0,left:-260})
						break;
					case 3:
						move(oSpan,{top:-375,left:0})
						break;
				
				}
			
			}
		})(i)
	
	}
	
	function getN(ev,i){
			var x=oDiv[i].offsetLeft+oDiv[i].offsetWidth/2-ev.clientX;
			var y=oDiv[i].offsetTop+oDiv[i].offsetHeight/2-ev.clientY;
			return Math.round((d2a(Math.atan2(y,x))+180)/90)%4;	
	}
	function d2a(d){
		return d*180/Math.PI;
	}
	
}
