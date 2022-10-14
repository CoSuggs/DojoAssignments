<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1" %>
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
<title><c:out value="${dojo.name}"></c:out></title>
</head>
<body>
	<h1><c:out value="${dojo.name}"></c:out> Location Ninjas:</h1>
	<table class="table table-striped table-bordered">
		<thead>
			<tr>
				<th class="text-center">First Name</th>
				<th class="text-center">Last Name</th>
				<th class="text-center">Age</th>
			</tr>
		</thead>
		<tbody>
		<c:forEach var="ninja" items="${dojo.ninjas}">
				<tr>
					<td class="text-center"><c:out value="${ninja.firstName}"></c:out></td>
					<td class="text-center"><c:out value="${ninja.lastName}"></c:out></td>
					<td class="text-center"><c:out value="${ninja.age}"></c:out></td>
				</tr>
		</c:forEach>
		</tbody>
	</table>
	<div>
		<p><a href="/ninjas/new">Create New Ninja</a></p>
	</div>
</body>
</html>