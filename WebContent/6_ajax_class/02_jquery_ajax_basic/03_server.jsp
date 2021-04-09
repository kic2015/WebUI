<%@ page language="java" contentType="text/xml; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!-- contentType="text/xml"이다. -->  
   
<%	// 1. 이전 화면에서 넘겨받은 데이타
	String cate = request.getParameter("cate");
	String name = request.getParameter("name");
	
	// 2. 다시 화면으로 보낼 데이터 구성--xml방식
	String result ="";
	
	result += "<data>";
	result += "<first>"+ "서버에서"+cate+"변경" +"</first>";
	result += "<second>"+ "from_"+name+"_server" +"</second>";
	result += "</data>";
	//태그로 묶어주는 방식 xml구조
	out.write(result);
	
%>    
