<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>아이디 중복 검사</title>
<script type="text/javascript"
	src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script type="text/javascript">
$(function(){
//	$('#id_check').click(function(){
	$('.userinput').keyup(function(){//사용자가 입력이벤트를 발생시킬때는 키보드를 손에서 땔때를 기준으로
		//window.open('a.jsp','','width:200, height:100'); 옛날방식
		//id와클래스는 프론트에서 찾고 name은 서버에서 찾는방식
		$.ajax({
			type : 'get',
			url  : 'IdCheck.jsp',
			data : {userId : $('.userinput').val()},//함수로 직접 받는형식
			dataType: 'text',
			success : function(data){
				if(data.trim() == 'YES'){
					$('#idmessage').text('이미 사용중이다');
					$('#idmessage').show();					
				}else{
					$('#idmessage').text('사용 가능한 id');
					$('#idmessage').show();					
				}				
			},
			error : function(err){
				console.log(err);				
			}
		});
	})
})

</script>
</head>
<body>

	<input name="id" type="text" class="userinput" size="15" />
	<button type="button" id="id_check">중복체크</button>
	<br />
	<br />
	<div id="idmessage" style="display: none;"></div>

</body>
</html>