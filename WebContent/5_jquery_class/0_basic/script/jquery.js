$(function(){
	//비교표현식 공부
/*	//첫번째 요소 찾기
	$('li:first').css({'border':'2px solid green'})
	//짝수 요소 찾기
	$('li:nth-child(2n)').css({'border':'2px solid green'})
	//네번째 요소찾기
	$('li:nth-child(4)').css({'border':'2px solid green'})
	//세번재보다 작은 요소 찾기
	$('li:lt(2)').css({'border':'2px solid green'})//eq(3)
	//첫번째를 제외한 요소찾기
	$('li:nth-child(n+2)').css({'border':'2px solid green'})//not(1)
	//튀김을 포함한 요소찾기
	$('li:contains("튀김")').css({'border':'2px solid green'})*/
	
	//li 요소에 마우스가 올라가면 bg 클래스 적용하고 마우스가 내려가면 bg클래스를 빼기
	//어묵 아래 자식요소를 제외한 요소
/*	$("body>ul>li:not(li:nth-child(3))").hover(function () {
		$(this).addClass("bg")
		}, function() {
		$(this).removeClass("bg")
	})*/
	$(function(){
		//각각의 그룹에서 첫번째 li 요소를 찾아 클래스 적용
//		$("body>ul>li:nth-child(1)").addClass("borderBlue")//body부터 경로를 지정해줘야 자식 ul에 어묵이 적용이 안된다
//		$("body>ul>li:first-of-type").addClass("borderBlue")//
//		$("body>ul>li:first-child").addClass("borderBlue")//
		$('body>ul').find('li:first').addClass("borderBlue")//그룹별로 나누고 li를 찾기
		
	})
	
})