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
<title>New Ninja</title>
</head>
<body>
	<div>
		<form:form action="/ninjas/new" method="POST" modelAttribute="ninja">
			<form:label path="dojo">Dojo:</form:label>
			<form:select path="dojo">
				<c:forEach var="dojo" items="${dojos}">
					<option value="${dojo.id}">${dojo.name}</option>
				</c:forEach>
			</form:select>
			<br />
			<form:label path="firstName">First Name:</form:label>
			<br />
			<form:errors path="FirstName" class="text-danger" />
			<form:input type="text" path="firstName"></form:input>
			<br />
			<form:label path="lastName">Last Name:</form:label>
			<br />
			<form:errors path="lastName" class="text-danger" />
			<form:input type="text" path="lastName"></form:input>
			<br />
			<form:label path="age">Age:</form:label>
			<br />
			<form:errors path="age" class="text-danger" />
			<form:input type="number" path="age"></form:input>
			<br />
			<input type="submit" value="Create Ninja" />
		</form:form>
	</div>
</body>
</html>