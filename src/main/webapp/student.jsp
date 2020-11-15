<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>

<html>
<head>	
<meta charset="ISO-8859-1">
<title>student Management</title>
</head>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="scriptfile.js"></script>

<body>
<a href="http://localhost:8080/stud/updatestudent.jsp">Update Students</a>


				
<table id="productTable">
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Age</th>
						<th>Branch</th>
						<th>Section</th>
						<th>delete</th>
						<th>edit</th>
					</tr>
				</thead>
</table>
</body>
</html>