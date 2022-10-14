<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="java.util.Date"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
    <head>
    <!-- for Bootstrap CSS -->
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<!-- YOUR own local CSS -->
<link rel="stylesheet" href="/css/main.css"/>
<!-- For any Bootstrap that uses JS or jQuery-->
<script src="/webjars/jquery/jquery.min.js"></script>
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
    
        <meta charset="UTF-8">
        <title>Fruity Loops</title>
    </head>
<body>
	<div class="container">
    <h1>Fruit Store</h1>
    <table>
    <tr>
    	<th>Name</th>
    	<th>Price</th>
    </tr>
    <c:forEach var="fruits" items="${fruitsFromMyController}">
        <tr>
        	<td><c:out value="${fruits.getName()}"></c:out></td>
        	<td><c:out value="${fruits.getPrice()}"></c:out></td>
        </tr>
    </c:forEach>
    </table>
    </div>
</body>
</html>
