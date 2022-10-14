<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8" import="java.util.Date"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<!-- for Bootstrap CSS -->
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<!-- YOUR own local CSS -->
<link rel="stylesheet" href="/css/main.css" />
<!-- For any Bootstrap that uses JS or jQuery-->
<script src="/webjars/jquery/jquery.min.js"></script>
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>

<meta charset="UTF-8">
<title>Omikuji</title>
</head>
<body>
	<div class="container" style="text-align: center">
	<h1>Here's your Omikuji!</h1>
	<div class="box" style="background: CornflowerBlue; border: 2px solid black ">
		<p>
			In
			<c:out value="${num}"></c:out>
			years, you will live in
			<c:out value="${cityName}"></c:out>
			with
			<c:out value="${realName}"></c:out><br/>
			as your roommate, selling
			<c:out value="${hobby}"></c:out>
			for a living. <br/>The next time you see a
			<c:out value="${livingThing}"></c:out>
			, you will have good luck.<br/> Also,
			<c:out value="${comment}"></c:out>.
		</p>
	</div>
	<a href="/">Go Back</a>
	</div>
</body>
</html>