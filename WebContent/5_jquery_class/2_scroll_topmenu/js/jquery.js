/**
 * 자바스크립트에서 
 * 	document.getElementById()
 * 	window.href.location
 */
$(document).ready(function(){
	
	$('p#intro').animate({	//json 표기법(key,value 형태)
		'padding':'20px',			//안쪽여백:padding 바깥쪽 여백 :margin			
		'fontSize':'20px'
	},2000);//애니메이션을 2초동안 움직이도록 작동
	$('#navigation>ul>li').hover(function(){
		$(this).animate({'paddingLeft':'+=15px'},500)//마우스가 올라갔을때 오른쪽으로 15px살짝 이동
	},function(){
		$(this).animate({'paddingLeft':'-=15px'},500)//또는 0px줘도된다
	})
	
	//퀵메뉴 (자바스크립트 객체를 jquery형식으로 사용해보기)
	$(window).scroll(function(){
		$('#navigation').css('top', $(document).scrollTop())
		
	})
})