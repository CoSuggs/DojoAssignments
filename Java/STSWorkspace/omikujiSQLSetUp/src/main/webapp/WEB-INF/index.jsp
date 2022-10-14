<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8" import="java.util.Date"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<!-- for Bootstrap CSS -->
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<!-- YOUR own local CSS -->
<link rel="stylesheet" href="/css/main.css" />
<!-- For any Bootstrap that uses JS or jQuery-->
<script src="/webjars/jquery/jquery.min.js"></script>
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>

<meta charset="UTF-8">
<title>Omikuji</title>
</head>
<body>
<div class="container">
	<h1>Send an Omikuji</h1>
	<form action="/omikuji" method="post">
		<label for="num">Pick any number between 5-25</label>
		<input type="number" name="num" />
		<label for="cityName">Enter the name of any city</label>
		<input type="text" name="cityName" />
		<label for="realName">Enter the name of any real person</label>
		<input type="text" name="realName" />
		<label for="hobby">Enter professional endeavor or hobby</label>
		<input type="text" name="hobby" />
		<label for="livingThing">Enter any type of living thing</label>
		<input type="text" name="livingThing" />
		<label for="comment">Say something nice to someone</label>
		<input type="text" name="comment" />
		<p>Send and show a friend</p>
		<input type="submit" />
		</form>
</div>
</body>
</html>