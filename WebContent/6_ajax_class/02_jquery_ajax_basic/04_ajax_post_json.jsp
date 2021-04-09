<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title></title>
<script type="text/javascript" src="libs/jquery-1.9.1.min.js">
	
</script>
<script type="text/javascript">
	$(function() {
		var param = {
			cate : 'book',
			name : 'kim'
		};
		$.ajax({
			type : 'get',//전송방식
			data : param,
			url : '04_server.jsp',
			dataType : 'text',   //dataType : 받을 데이터 타입(text/json)-text로 받고 json로 바꿔준다(라이브러리없어서 text로 임시대체)
			/*json : json으로 데이터를 받을때 라이브러리 필요  */
			success : parseData //함수를 쓰고 싶을때는 함수를 따로만들어서(parseData) 호출하는방식으로
		});

		alert('시작');
		function parseData(result) {//서버가 보내주는 데이터를 result라는 이름으로 받는다
			var obj = {};
			obj =eval("("+result+")");//강제로 객체 생성해주기 eval은 강제로 객체로 만들어주는함수인데 쓰지않는걸 권장
			$('#cate').val(obj.first);
			$('#name').val(obj.second);
		}
	})
</script>
</head>

<body>
	서버로부터 넘겨받은 데이터
	<br /> 첫번째 데이터 :
	<input type="text" name="" id="cate" />
	<br /> 두번째 데이터 :
	<input type="text" name="" id="name" />
	<br />
</body>
</html>


