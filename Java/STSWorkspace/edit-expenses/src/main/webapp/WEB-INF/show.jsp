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
<title>Display Expense</title>
</head>
<body style="margin: 10vw;">
	<h1>Expense Details</h1><a href="/expenses/">Go back</a>
			<p>
				Expense Name: ${expense.name}
			</p>
			<p>
				Expense Description: ${expense.description}
			</p>
			<p>
				Vendor:	${expense.vendor}
			</p>
			<p>
				Amount spent: $${expense.amount}
			</p>
			
	<br>
</body>
</html>