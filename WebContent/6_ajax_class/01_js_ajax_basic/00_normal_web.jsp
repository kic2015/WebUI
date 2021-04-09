<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
 
<%
	// ***  한글이 깨지는 문제가 있지만 전반적인 흐름만 이해합니다.
	request.setCharacterEncoding("UTF-8");
	String cate = request.getParameter("cate");
	String name = request.getParameter("name");
	if( cate == null ) cate = "";
	if( name == null ) name = "";
%>
    
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title></title>
</head>

<body>
<form name="frm" action="00_server.jsp">
<input type="submit" value="server.jsp파일을 불러 데이터 받아옴">
<br/>
서버로부터 넘겨받은 데이터<br/>
첫번째 데이터 : <input type="text" name="cate" id="cate" value="<%=cate%>"/><br/>
두번째 데이터 : <input type="text" name="name" id="name" value="<%=name%>"/><br/>

</form>

</body>
</html>
<!-- normal_web.jsp 처음 요청 submit버튼누르고 action을 통해 server.jsp로 갔다가 server.jsp에서 다시 normal_web.jsp로 가는데 데이터를 보낸다
	그럼 normal_web.jsp에서 request를 통해 cate,name값을 받아서 input태그에서 value에 cate name값을 넣어준다
 -->

