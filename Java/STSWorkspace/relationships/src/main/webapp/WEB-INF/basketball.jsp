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
<title>All Teams</title>
</head>
<body>
	<h1>League Teams:</h1>
	<div>
		<c:forEach var="team" items="${teams}">
			<p><a href="/teams/${team.id }"><c:out value="${team.name}"></c:out></a></p>
		</c:forEach>
	</div>
	<hr />
	<div>
		<p><a href="/teams/new">Create New Team</a></p>
		<p><a href="/players/new">Create New Player</a></p>
	</div>
</body>
</html>