<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="java.util.Date"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
    <head>
    <!-- for Bootstrap CSS -->
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<!-- YOUR own local CSS -->
<link rel="stylesheet" href="/css/main.css"/>
<!-- For any Bootstrap that uses JS or jQuery-->
<script src="/webjars/jquery/jquery.min.js"></script>
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
    
        <meta charset="UTF-8">
        <title>Demo JSP</title>
    </head>
<body style="background-color: rebeccapurple">
    <!-- Inserting a for loop into your jsp -->
    <% for(int i = 0; i <= 15; i++) { %>
        <h3 style="color: yellowgreen"><%= i %></h3>
    <% } %>
    <p>The time is: <%= new Date() %></p>
</body>
</html>
