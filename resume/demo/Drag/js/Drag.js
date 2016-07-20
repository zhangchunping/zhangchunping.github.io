// JavaScript Document
window.onload=function(){
	var oUl=document.getElementById('ul1');
	var oDiv=document.getElementById('div');
	var aImg=document.getElementsByTagName('img');
	var aImgw=aImg[0].offsetWidth;
	var aImgh=aImg[0].offsetHeight;
	var aLi=oUl.children;
	var liw=aLi[0].offsetWidth;
	var icenter=oDiv.offsetWidth/2;
	oUl.style.width=oUl.children.length*liw+'px';
	var nMaxLeft=icenter-liw*(1-0.5);
	var nmisLeft=icenter-(aLi.length-0.5)*liw;
	//默认居中
	oUl.style.left=icenter-liw*(3-0.5)+'px';
	setSize()	
	//拖拽
	oUl.onmousedown=function(ev){
		var oEvent=ev ||event;
		var disX=oEvent.clientX-oUl.offsetLeft;
		document.onmousemove=function(ev){
			var oEvent=ev ||event;
			left=oEvent.clientX-disX;
			if(left>nMaxLeft){
				left=nMaxLeft;
			}else if(left<nmisLeft){
				left=nmisLeft;
			}
			oUl.style.left=left+'px';
			setSize();
		}
		document.onmouseup=function(){
			document.onmousemove=null;
			document.onmouseup=null;
			for(var i=0; i<aImg.length; i++){
				if(aImg[i].offsetWidth>460){
					aImg[i].style.width=556+'px';
					aImg[i].style.height=720+'px';
					aImg[i].style.marginLeft=-(aImg[i].offsetWidth-278)/2+'px';
					aImg[i].style.marginTop=-(aImg[i].offsetHeight-360)/2+'px';
					aImg[i].style.opacity=1;
					var left=icenter-liw*(i+0.5)+'px';
					move(oUl,{left:left},{easing:Tween.Bounce.easeOut})
				}
			}
		}
		return false;
		oEvent.preventDefault();
	}
	
	function setSize(){
		for(var i=0; i<aLi.length; i++){
			var dis=Math.abs(oUl.offsetLeft+aLi[i].offsetLeft+liw/2-icenter);
			var scale=(1-dis/600).toFixed(2);
			aImg[i].index=i;
			aImg[i].style.opacity=scale;
			(scale<0.5)&&(scale=0.5)
			aImg[i].style.width=556*scale+'px';
			aImg[i].style.height=720*scale+'px';
			aImg[i].style.marginLeft=-(aImg[i].offsetWidth-400)/2+'px';
			aImg[i].style.marginTop=-(aImg[i].offsetHeight-300)/2+'px';
			aLi[i].style.zIndex=100*scale;
		}
		
	}
	
	
}