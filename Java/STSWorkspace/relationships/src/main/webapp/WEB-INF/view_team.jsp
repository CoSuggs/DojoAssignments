<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<!DOCTYPE html>
<html>
<head>
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
	crossorigin="anonymous">
<title><c:out value="${team.name}"></c:out></title>
</head>
<body>
	<h1><c:out value="${team.city}"></c:out><c:out value="${team.name}"></c:out></h1>
	<div>
		<c:forEach var="player" items="${team.players}">
			<p><c:out value="${player.firstName}"></c:out> <c:out value="${player.lastName}"></c:out></p>
			<p>Age: <c:out value="${player.age}"></c:out></p>
			<p>Position: <c:out value="${player.position}"></c:out></p>
			<br />
		</c:forEach>
	</div>
	<hr />
	<div>
		<p><a href="/players/new">Create New Player</a></p>
	</div>
</body>
</html>