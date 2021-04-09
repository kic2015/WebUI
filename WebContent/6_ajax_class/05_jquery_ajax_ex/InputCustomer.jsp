<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>고객관리 프로그램</title>
<script type="text/javascript"
	src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script type="text/javascript">
	$(function() {
		
		$('#btnInsert').click(function() {//입력버튼을 눌렀을때
			//1. 서버로 전송(통신)-원래 전통방식 통신
/* 			$('form').attr('action','DataInput.jsp');//form에 action이 없어서 따로 action을 지정해준것
			$('form[name="inForm"]').submit(); */
			
			//2. AJAX 통신(서버로 비동기 통신)
			var param = {
				name : $('#name').val(),
				age  : $('#age').val(),
				tel  : $('#tel').val(),
				addr : $('#addr').val(),				
			}
			
			$.ajax({
				type : 'post', 
				data : param,
				url  : 'DataInput.jsp',
				success : function(result){
					if(result.trim() =='1'){
						alert('입력성공')
						//성공하면 화면 초기화
						$('#name').val('');
						$('#age').val('');
						$('#tel').val('');
						$('#addr').val('');
					}else{
						alert('입력실패');						
					}
				},
				dataType : 'text'
			})
		})
		
		$('#btnSelect').click(function() {//가져오기버튼을 눌렀을때
			//2. AJAX 통신(서버로 비동기 통신)
			$.ajax({
				url  : 'DataSelect.jsp',
				success : parseData
			})
			
			function parseData(data){//서버에서 보내주는 data를 받아서 함수 내부코드 실행
				$('#tbd').empty();
				//$('선택자',찾는대상)--찾는대상에서 선택자를 찾아달라는 의미(서버에서 받은data에서 person을 찾아달라)
				var txt = $('person',data)
				txt.each(function(){
					var name =$('name',this).text();//현재객체(this)에서 name태그를 찾아라
					var age =$('age',this).text();
					var tel =$('tel',this).text();
					var addr =$('addr',this).text();
					$('#tbd').append("<tr><td>"+name+"</td>"+"<td>"+age+"</td>"+"<td>"+tel+"</td>"+"<td>"+addr+"</td></tr>")
				})
			}
		})
	})
	

</script>

</head>


<!-- <body> -->
<body>

	<h2>고객정보 입력</h2>

	<form name="inForm" method="post">
		<table border=1>
			<tr>
				<td width="80" align="center">Name</td>
				<td width="50" align="center">Age</td>
				<td width="100" align="center">Tel</td>
				<td width="250" align="center">Addr</td>
			</tr>
			<tr>
				<td align="center"><input type="text" size="8" name="name"
					id="name"></td>
				<td align="center"><input type="text" size="4" name="age"
					id="age"></td>
				<td align="center"><input type="text" size="12" name="tel"
					id="tel"></td>
				<td align="center"><input type="text" size="30" name="addr"
					id="addr"></td>
			</tr>
			<tr>
				<td colspan="4" align="center"><input type="button"
					id='btnInsert' value="입력"></td>
			</tr>
		</table>

		<br>
		<hr>

		<h2>고객정보 목록보기</h2>
		<table border='0' width="510">
			<tr>
				<td align="right"><input type="button" id='btnSelect'
					value="가져오기"></td>
			</tr>
		</table>
		<table border=1 id="listTable">
			<tr>
				<td width="80" align="center">Name</td>
				<td width="50" align="center">Age</td>
				<td width="100" align="center">Tel</td>
				<td width="250" align="center">Addr</td>
			</tr>
			<tbody id='tbd'></tbody>
		</table>
		<div id="myDiv"></div>

	</form>
</body>
</html>