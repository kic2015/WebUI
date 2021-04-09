$(document).ready(function() {

	$("#container").addClass("start");

	$("nav li").click(function() {
		$("#container").css("max-width", "100%")

		var id = $(this).attr("data-rol");
		$("nav li").removeClass("on");
		$(this).addClass("on");
		$(".content").removeClass("prev this next");
		//클릭 시 가지고 있던 클래스를 모두 지운다 

		$("#" + id).addClass("this").prevAll().addClass("prev");
		//클릭한 메뉴와 매칭 되는 id에 this 클래스를 지정하고 그 앞의 모든 <section> 태그는 .prev클래스를 지정한다    
		$("#" + id).nextAll().addClass("next");
		//클릭한 메뉴와 매칭 되는 id의 뒤에 오는 <section> 태그는 .next 클래스를 지정한다     
	});

	//********************************************************
	//ajax 사용하기
	$(".book_roll li").click(function() {
		// (1) 이벤트 발생한 li 요소에서 data-url 값 가져오기
		var liurl = $(this).data("url");

		// (2)  class='notebook' 지정한 article의 요소에 ajax로 파일을 받아서 지정

		$.ajax({
			type : 'post',// 전송방식
			url  : liurl,// 요청페이지
			dataType :'html',//받을 데이터타입
			success :function(data){//데이터 받는거 성공하면
				$('.notebook').html(data);//서버측에서 보내주는 데이터를 받아서 어디에 출력하냐 화면은 .notebook클래스로 지정되어있고 이걸 찾아서 html형태 데이터로 지정  
			}
		});
	});
});
