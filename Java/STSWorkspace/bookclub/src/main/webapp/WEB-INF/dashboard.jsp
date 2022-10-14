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
		<div class="row">
			<div class="column">
				<h1>Welcome, ${userName}</h1>
				<br />
				<p>Books from everyone's shelves</p>
			</div>
			<div class="column">
				<a href="/logout"> Logout</a> 
			</div>
			<div class="column">
				<a href="/books/new">+ Add a book to my shelf</a>
			</div>
		</div>
	</div>
	<div class="container mt-5">
		<table class="table table-striped table-bordered">
		<thead>
			<tr>
				<th class="text-center">ID</th>
				<th class="text-center">Title</th>
				<th class="text-center">Author</th>
				<th class="text-center">Posted By</th>
			</tr>
		</thead>
		<tbody>
		<c:forEach var="book" items="${bookList}">
				<tr>
					<td class="text-center"><c:out value="${book.id}"></c:out></td>
					<td class="text-center"><a href="/books/${book.id}"><c:out value="${book.title}"></c:out></a></td>
					<td class="text-center"><c:out value="${book.author}"></c:out></td>
					<td class="text-center"><c:out value="${book.user.userName}"></c:out></td>
				</tr>
		</c:forEach>
		</tbody>
	</table>
	</div>
	      
</body>
</html>

