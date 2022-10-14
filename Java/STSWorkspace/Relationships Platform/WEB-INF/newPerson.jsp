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
<title>Insert title here</title>
</head>
<body>
	<form:form>
		<form:select path="person">
			<c:forEach var="onePerson" items="${persons}">
				<!--- Each option VALUE is the id of the person --->
				<form:option value="${onePerson.id}" path="person">
					<!--- This is what shows to the user as the option --->
					<c:out value="${onePerson.firstName}" /> 
					<c:out value="${onePerson.lastName}" />
				</form:option>
			</c:forEach>
		</form:select>
	</form:form>
</body>
</html>