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
<title>New Player</title>
</head>
<body>
	<div>
		<form:form action="/players/new" method="POST" modelAttribute="player">
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
			<form:label path="position">Position:</form:label>
			<br />
			<form:errors path="position" class="text-danger" />
			<form:input type="text" path="position"></form:input>
			<br />
			<form:label path="team">Team:</form:label>
			<form:select path="team">
				<c:forEach var="team" items="${teams}">
					<option value="${team.id}">${team.name}</option>
				</c:forEach>
			</form:select>
			<br />
			<input type="submit" value="Create Player" />
		</form:form>
	</div>
</body>
</html>