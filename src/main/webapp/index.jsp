<html>
<body>
    <h2>Jersey RESTful Web Application!</h2>
    <p><a href="webapi/myresource">Jersey resource</a>
    <p><a href="http://localhost:8080/stud/student.jsp">open student management</a>
    <p>Visit <a href="http://jersey.java.net">Project Jersey website</a>
    <br>
    for more information on Jersey!
    <br>
     <br>
      <br>
    <a href="http://localhost:8080/stud/webapi/student"> Get all student details</a><br>
     <br>
      <br>
      <a href="http://localhost:8080/studentManagementRest/student/get?id=$ID">http://localhost:8080/studentManagementRest/student/get?id=$ID</a>
    <br><br>
    To list:
GET http://localhost:8080/studentManagementRest/student
 <br>

To get:
GET http://localhost:8080/studentManagementRest/student/get?id=$ID
ex: http://localhost:8080/studentManagementRest/student/get?id=95

 <br>
to delete:
method=DELETE http://localhost:8080/studentManagementRest/student/id
ex: http://localhost:8080/studentManagementRest/student/101

 <br>

To add:
POST http://localhost:8080/studentManagementRest/student/add
{  
    "name":"post upd",
    "age":"45",
    "branch":"rr",
    "section":"d"
}
 <br>
To Update: http://localhost:8080/studentManagementRest/student/update
POST 
{   "id":"100",
    "name":"post upd",
    "age":"45",
    "branch":"rr",
    "section":"d"

}


    
</body>
</html>
