<%@ page language="java" import="java.sql.*"%>
<%
String driver="oracle.jdbc.driver.OracleDriver";
String user="SCOTT";
String pass="TIGER";
String dbURL="jdbc:oracle:thin:@localhost:1521:xe";

request.setCharacterEncoding("UTF-8");//POST방식일때 한글깨지는거 방지를 위해 인코딩설정
String name  = request.getParameter("name");
String age = request.getParameter("age");
String tel = request.getParameter("tel");
String addr= request.getParameter("addr");


	Class.forName(driver);
	Connection connection=DriverManager.getConnection(dbURL,user,pass);		
	
/* 	String sql = "insert into ajax_temp(name, age, tel, addr) values(";
	sql += "'" + name + "','" + age + "','" + tel + "','" + addr + "')";//statement를쓸때 sql문을 일일이 다 작성해줘야한다
	//PreparedStatement는 empno= ? 방식 */
	
	String sql = "insert into ajax_temp(name, age, tel, addr) values(?,?,?,?)";			
	PreparedStatement pstmt = connection.prepareStatement(sql);//prepared는 준비상태니까 값을 넣어줘야함
	pstmt.setString(1, name);
	pstmt.setString(2, age);
	pstmt.setString(3, tel);
	pstmt.setString(4, addr);
	
	int result = pstmt.executeUpdate();		

	pstmt.close();
	connection.close();
	
	out.write(String.valueOf(result));
%>