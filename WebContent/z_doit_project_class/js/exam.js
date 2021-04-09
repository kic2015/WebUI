$(function(){

//1. 오늘 날짜출력(년,월,일 형식)

$('#date_wrap').text(new Date().toLocaleDateString('ko-KR',{ //현지로컬날짜 얻어오기 (해당지역,옵션)

	//각각 항목에 옵션을 부여
	
	year: 'numeric',
	
	month: 'long',
	
	day: 'numeric', 

}));

//2. 검색어입력 안내문구 삭제

$('#keyword').focus(function(){//검색창(keyword) 태그에 포커스가 갔을때

	$(this).css('background','none');//해당 요소의 css에서 background 값을 none으로 변경

});
//3. 탭메뉴

let curr = $('#tabmenu > .tab_btn1 > a > img')

$('#tabmenu > dt img').click(function() {

	$('#tabmenu dd').hide(); //모든 dd 항목을 숨긴다
	
	$(this).parent().parent().next().show();//클릭한 요소의 dd만 보여준다
	
	curr.attr('src', curr.attr('src').replace("over", "out"));//선택했던 탭 이미지 비활성화
	
	$(this).attr('src', $(this).attr('src').replace("out", "over"));//선택한 탭 이미지 활성화
	
	//현재 탭을 초기화
	
	curr = $(this)

});

//4. 베스트 BOOK 이미지 슬라이드 -(best_bg 구조 변경 :li,a태그 삭제, 전체 div('best') 추가)

$('#best').bxSlider({ //bxSlider 플러그인 사용

maxSlides : 5,//슬라이드 이미지 최대 노출 갯수

slideMargin : 10,//슬라이드 마진

slideWidth : 200,//슬라이드 넓이

auto : true//자동실행

});

//4-1 이미지 슬라이드 좌측버튼 

$('.prev_btn').click(function(){

$('#best').bxSlider.goToNextSlide();

});

//4-1 이미지 슬라이드 우측버튼 

$('.next_btn').click(function(){

$('#best').bxSlider.goToPrevSlide();

});

//5. 로그인 버튼 클릭 - 로그인 창 뜨게 하기

$('.login_wrap').click(function(){

$('#login_f').animate({top:'30px'});

});

//5. CLOSE버튼 클릭 - 로그인 창 닫기 

$('.login_close_btn').click(function(){

$('#login_f').hide();

});

//6. 전체메뉴 - 하단 메뉴 보여주기

$('#total_btn').click(function(){

$('#total_menu').show();

});

//6-1. 하단메뉴 닫기

$('#total_close').click(function(){

$('#total_menu').hide();

});

})