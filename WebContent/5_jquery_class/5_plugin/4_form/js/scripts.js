/**
 * 외부 플러그인 js파일의 함수 가져다 쓰기
 * jquery.validate.js 파일에서 함수 호출
 * 
 * 과제 : 하단에 체크박스 체킹 기능 구현
 * check-all 클릭이 되어졌을때 agree 항목의 값을 전부 주고
 * check-all 다시 클릭이 되어졌을때 agree 항목의 값을 전부 해제
 * 
 */
$(function(){
	$('#signup>form').validate({//플러그인 파일의 validate함수를 쓴다
		rules:{//값이 여러개가 들어갈거라 {}로 묶어준다
			name :{ required : true },//required는 빈값 유효성 체크
			email : { required : true,
					  email : true},//email은 이메일 형식의 값인지 유효성 체크
			website : { required : true,
						url : true},
			password : {required : true,
						minlength:6,
						maxlength:100},
			passconf : {equalTo: '#password'}
					  
		},
		success:function(label){//성공했을때
			label.addClass('valid'); //label에 valid클래스 추가
			label.text('ok');//label의 텍스트 ok를 넣어준다
		}
		
	});
	
	$('.check-all').click(function(){
	/*		if($('.check-all').is(':checked')==true){//is함수():인자로 주어진 항목들에 부여된 선택자(:checked-체크선택자)가 있을경우 true를 반환
			$('.agree').prop('checked',true)
		}else if($('.check-all').is(':checked')==false){
			$('.agree').prop('checked',false)
		}
		*/
	$('.agree').prop('checked', $(this).prop('checked'))//위의 코드 한줄형태
	})
	
})