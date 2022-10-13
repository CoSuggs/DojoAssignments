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
<title>New Dojo</title>
</head>
<body>
	<div>
		<form:form action="/dojos/new" method="POST" modelAttribute="dojo">
			<form:label path="name">Dojo Name:</form:label>
			<form:errors path="name" class="text-danger"/>
			<br />
			<form:input type="text" path="name" />
			<br />			
						
			<input type="submit" value="Create Dojo" />
		</form:form>
	</div>
</body>
</html>