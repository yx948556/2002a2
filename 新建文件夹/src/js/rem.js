function rem(){
	document.documentElement.style.fontSize = document.documentElement.clientWidth/7.5+"px";
}
rem();
window.onresize = rem;
// $(function(){
// 	function rem(){
// 		document.documentElement.style.fontSize = document.documentElement.clientWidth/4+"px";
// 	}
// 	rem();
// 	window.onresize = rem;
// })
// function rem(){
// 	document.documentElement.style.fontSize=
// 	document.documentElement.clientWidth / 4 +'px'
// }
// rem()
// window.addEventListener('resize',rem,false)//end initial rem
// document.addEventListener('touchmove',function(e){
// 	e.preventDefault()
// },{passive:false})//end prevent iscroll conflict
// function getajax(urlstr,sucfunc){
// 	$.ajax({
// 		type:'get',
// 		async:1,
// 		url:urlstr,
// 		dataType:'json',
// 		success:sucfunc,
// 		error:function(e){
// 			console.log(e,'error')
// 		}
// 	})
// }//end function getajax defination