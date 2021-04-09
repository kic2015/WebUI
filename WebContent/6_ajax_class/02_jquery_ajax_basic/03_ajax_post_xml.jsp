<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title></title>
	<script  type="text/javascript"  src="libs/jquery-1.9.1.min.js"> </script>

</head>
<script type="text/javascript">
$(function(){
	var param ={cate:'book',name:'kim'};
	$.ajax({
		type : 'get',//전송방식
		data : param,
		url : '03_server.jsp',
		dataType : 'xml',//dataType : 받을 데이터 타입(text/xml)-text로 받고 xml로 바꿔준다
		success : parseData //함수를 쓰고 싶을때는 함수를 따로만들어서(parseData) 호출하는방식으로
	});	
	
	alert('시작');
	function parseData(result){//서버가 보내주는 데이터를 result라는 이름으로 받는다
		$('#cate').val($(result).find('first').text())//cate라는 id값을 찾아서 서버에서 받은 result를 바로 객체로 만들어버림 그런다음에 첫번째 자식을 찾아온다
		$('#name').val($(result).find('second').text())
	}
})

</script>
<body>
서버로부터 넘겨받은 데이터<br/>
첫번째 데이터 : <input type="text" name="" id="cate"/><br/>
두번째 데이터 : <input type="text" name="" id="name"/><br/>
</body>
</html>


