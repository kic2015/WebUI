<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<script type="text/javascript" src="libs/jquery-1.9.1.min.js">
	
</script>
<script type="text/javascript">
	$(function() {
		var param = {
			cate : 'book',
			name : 'kim'
		}
		/* ajax 
		 타입을 명시하는것을 권장 - 브라우저마다 다르기때문에
		 IE : 기본 get 방식
		 Chrome : 기본 post방식
		*/
		$.ajax({ //전통방식
			type : 'get',  // type :데이터 전송방식
			data : param, //data : 서버로 보낼 데이터
			url  : '01_server.jsp',	//url  : 서버로 요청 페이지
			success : parseData,//서버로부터 성공하면 호출되는 함수
			error   : function(){//서버로부터 실패할때
				alert('에러발생');
			}
		});
		
//		$.get('01_server.jsp',param,parseData); --ajax 축약형(간단한) 방식 (type ,url,data,성공했을때 호출함수)

		alert('전송시작')//1번
		
		function parseData(data)//서버에서 보내주는 데이터를 통으로 받는다
		{
			var aryData = data.split('|');//데이터를 구분자를 기준으로 쪼갠다
			
			for(var i=0; i < aryData.length; i++){
				alert(aryData[i]);
				
				var keyValue = aryData[i].split('=');//다시 arydata[i]를 구분자기준으로 또 나눠서 keyvalue에 담는다
				
				if(keyValue[0].trim() == 'cate'){
					$('#cate').val(keyValue[1]);
				}
				
				if(keyValue[0].trim() == 'name'){
					$('#name').val(keyValue[1]);
				}
			}
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


