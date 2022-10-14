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
	<h1>Here's your Omikuji!</h1>

	<div class="container">
		<c:forEach var="omikuji" items="${omikujiFromController}">
			<p>
				In
				<c:out value="${omikuji.getNum()}"></c:out>
				years, you will live in
				<c:out value="${omikuji.getCityName()}"></c:out>
				with
				<c:out value="${omikuji.getRealName()}"></c:out>
				as your roommate, selling
				<c:out value="${omikuji.getHobby()}"></c:out>
				for a living. The next time you see a
				<c:out value="${omikuji.getLivingThing()}"></c:out>
				, you will have good luck. Also,
				<c:out value="${omikuji.getComment()}"></c:out>
			</p>
		</c:forEach>
	</div>
	<a href="/">Go Back</a>

</body>
</html>