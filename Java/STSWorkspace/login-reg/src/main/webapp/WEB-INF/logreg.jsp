<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Web Page Title Here</title>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
</head>
<body>
	<div class="container mt-5">
		<h1>Register</h1>
		<form:form action="/register" method="POST" modelAttribute="newUser">
			<div class="form-group">
				<form:label path="userName">User Name:</form:label>
				<form:input path="userName" class="form-control" />
				<form:errors path="userName" class="form-control" />
			</div>
			<div class="form-group">
				<form:label path="email">Email:</form:label>
				<form:input path="email" class="form-control" />
				<form:errors path="email" class="form-control" />
			</div>
			<div class="form-group">
				<form:label path="password">Password:</form:label>
				<form:input type="password" path="password" class="form-control" />
				<form:errors path="password" class="form-control" />
			</div>
			<div class="form-group">
				<form:label path="confirm">Confirm Password:</form:label>
				<form:input type="password" path="confirm" class="form-control" />
				<form:errors path="confirm" class="form-control" />
			</div>
			<button type="submit" class="btn btn-primary">Register</button>
		</form:form>

		<h1>Login</h1>
		<form:form action="/login" method="POST" modelAttribute="newLogin">
			<div class="form-group">
				<form:label path="email">Email:</form:label>
				<form:input path="email" class="form-control" />
				<form:errors path="email" class="form-control" />
			</div>
			<div class="form-group">
				<form:label path="password">Password:</form:label>
				<form:input type="password" path="password" class="form-control" />
				<form:errors path="password" class="form-control" />
			</div>
			<button type="submit" class="btn btn-primary">Login</button>
		</form:form>
	</div>
	      
</body>
</html>

