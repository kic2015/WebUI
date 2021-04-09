$(function(){
	let img = $('.rollover>img');//img태그 찾기
/*	var src = img.attr('src').replace('_off','_on')//img의 src속성을 가져오기
	//replace는 특정코드를 바꾸거나 대체하는  역할

	img.attr('src',src)//src속성에 위에서 바꿔준 src변수를 넣어준다 
	img.eq(0).attr('src',src)//img에서 몇번째인지를 지정해주지않으니 src 색깔이 전부 바뀐다 그래서 eq를 줘서 몇번째인지 명확히 정해준다
*/	
	img.hover(function(){
		let src = $(this).attr('src').replace('_off','_on')//img의 src속성을 가져오기
		//replace는 특정코드를 바꾸거나 대체하는  역할
		//this는 마우스가위에 올라간 순간 img중에 마우스 포인트가 올라간 해당하는 요소
		$(this).attr('src',src)//src속성에 위에서 바꿔준 src변수를 넣어준다 
		
	},function(){
		let src = $(this).attr('src').replace('_on','_off')//img의 src속성을 가져오기
		//replace는 특정코드를 바꾸거나 대체하는  역할

		$(this).attr('src',src)//src속성에 위에서 바꿔준 src변수를 넣어준다 
		
	})
})