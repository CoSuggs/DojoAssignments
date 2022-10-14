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
	<div class="row">
		<div class="column">
			<h1>Change your Entry!</h1>
		</div>
		<div class="column">
			<a href="/dashboard">Back to the shelves</a>
		</div>
	</div>
	<div>
		<form:form action="/books/${book.id}/edit" method="POST"
			modelAttribute="book">
			<input type="hidden" name="_method" value="put">
			<form:label path="title">Title:</form:label>
			<form:errors path="title" class="text-danger" />
			<br />
			<form:input type="text" path="title" />
			<br />
			<form:label path="author">Author:</form:label>
			<form:errors path="author" class="text-danger" />
			<br />
			<form:input type="text" path="author" />
			<br />
			<form:label path="thought">My Thoughts:</form:label>
			<form:errors path="thought" class="text-danger" />
			<br />
			<form:input type="text" path="thought" />
			<br />
			<form:hidden path="user"/>

			<input type="submit" class="btn btn-primary" value="Submit" />
		</form:form>
	</div>
</body>
</html>