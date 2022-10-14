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
			<h1>${book.title}</h1>
		</div>
		<div class="column">
			<a href="/dashboard">Back to the shelves</a>
		</div>
	</div>
	<div>
		<h4>
			<span>${book.user.userName}</span> read <span>${book.title}</span> by <span>${book.author}</span>.
		</h4>
		<h4>Here are ${book.user.userName}'s thoughts:</h4>
	</div>
	<div>
		<hr />
		<p>${book.thought}</p>
		<hr />
	</div>
	<div class="row">
	<c:choose>
	<c:when test="${userId.equals(book.user.id)}">
		<div class="column">
			<a href="/books/${book.id}/edit" class="btn btn-success">Edit</a>
		</div>
		<div class="column">
		<form action="/books/${book.id}/delete" method="POST">
		<input type="hidden" name="_method" value="delete" />
		<button type="submit" class="btn btn-danger"> Delete</button>
		</form>
		</div>
	</c:when>
	<c:otherwise>
	<p>Log in to edit book</p>
	</c:otherwise>
	</c:choose>
	</div>

</body>
</html>