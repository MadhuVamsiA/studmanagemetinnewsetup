
<!DOCTYPE html>
<html>
<head>	
<meta charset="ISO-8859-1">
<title>Update Student</title>
</head>
<script src="scriptfile.js"></script>

<body>
<h2>Student Data</h2>

<p id="demo"></p>
	<tr>
	<th>ID</th>
	<th>Name</th>
	<th>Age</th>
	<th>Branch</th>
	<th>Section</th>
	<th>Actions</th>
	</tr>
	
		
		<body style="text-align:center;" id="body"> 
	  
    <p> 
        <!-- Making a text input -->
        <input type="text" id="id" placeholder="id"> 
        <input type="text" id="name" placeholder="name"> 
        <input type="text" id="age" placeholder="age"> 
        <input type="text" id="branch" placeholder="branch"> 
        <input type="text" id="section" placeholder="section"> 
                  
        <!-- Button to send data -->
        <button onclick="updateStudent(), openWin()">Update Student</button> 
  
      <!-- For printing result from server -->
      <p class="result" style="color:green">list</p> 
      
   </p> 
  	

</body>
</html>
