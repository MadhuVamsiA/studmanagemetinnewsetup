/**
 * 
 */

function addStudent(){ 
	
	let result = document.querySelector('.result'); 
	let name = document.querySelector('#name'); 
	let age = document.querySelector('#age'); 
	let branch = document.querySelector('#branch'); 
	let section = document.querySelector('#section'); 
	
	// Creating a XHR object 
	let xhr = new XMLHttpRequest(); 
	let url = "http://localhost:8080/stud/webapi/student/add"; 

	// open a connection 
	xhr.open("POST", url, true); 

	// Set the request header i.e. which type of content you are sending 
	xhr.setRequestHeader("Content-Type", "application/json"); 

	// Create a state change callback 
	xhr.onreadystatechange = function () { 
		if (xhr.readyState === 4 && xhr.status === 200) { 

			// Print received data from server 
			result.innerHTML = this.responseText; 

		} 
	}; 

	// Converting JSON data to string 
	var data = JSON.stringify({ "name": name.value, "age": age.value,"branch": branch.value,"section": section.value }); 

	// Sending data with the request 
	xhr.send(data); 
	refreshPage();
} 




function listStudentsApi(){ 
	
	var obj, dbParam, xmlhttp, myObj, x, txt = "";
	xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
	    myObj = JSON.parse(this.responseText);
	    txt += "<table border='1'>"
	    	 console.log(myObj);
	    for (x in myObj) {
	    	 console.log(x);
	    	 console.log(myObj[x]);
	      }

	    

	  
	    for (x in myObj) {

	    $("#productTable").append("<tr>" + 
	        "<td>"+myObj[x].id+"</td>" +
	        "<td>"+myObj[x].name+"</td>" +
	        "<td>"+myObj[x].age+"</td>" +
	        "<td>"+myObj[x].branch+"</td>" +
	        "<td>"+myObj[x].section+"</td>" +
	        "<td><button onclick='deleteStudent("+ myObj[x].id+ ")'>delete</button> </td>"+

	        "</tr>");

	    	 }
	    
	    $("#productTable").append(  "<tr> <td></td>"+
	    		'<td> <input type="text" id="name" placeholder="name"> </td>'+
	    		'<td> <input type="text" id="age" placeholder="age"> </td>'+
        '<td><input type="text" id="branch" placeholder="branch"></td> '+
       ' <td><input type="text" id="section" placeholder="section"> </td>'+
'        <td><button onclick="addStudent()">Add</button> </td>');
	  }
	};
	xmlhttp.open("GET", "http://localhost:8080/stud/webapi/student", true);
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xmlhttp.send();
		
	} 
$(document).ready(function () {
	listStudentsApi();
});


function deleteStudent(sid){ 
	
	let result = document.querySelector('.result'); 
	let id = sid; 

	
	// Creating a XHR object 
	let xhr = new XMLHttpRequest(); 
	let url = "http://localhost:8080/stud/webapi/student/"+sid;

	// open a connection 
	xhr.open("DELETE", url, true); 

	// Set the request header i.e. which type of content you are sending 
	xhr.setRequestHeader("Content-Type", "application/json"); 

	// Create a state change callback 
	xhr.onreadystatechange = function () { 
		if (xhr.readyState === 4 && xhr.status === 200) { 

			// Print received data from server 
			//result.innerHTML = this.responseText; 
			refreshPage();
			return;

		} 
	}; 

	// Converting JSON data to string 
//	var data = JSON.stringify({ "name": name.value, "age": age.value,"branch": branch.value,"section": section.value }); 

	// Sending data with the request 
	xhr.send(); 
} 


function updateStudent(){ 
	
	let result = document.querySelector('.result'); 
	let name = document.querySelector('#name'); 
	let id = document.querySelector('#id'); 
	let age = document.querySelector('#age'); 
	let branch = document.querySelector('#branch'); 
	let section = document.querySelector('#section'); 
	
	// Creating a XHR object 
	let xhr = new XMLHttpRequest(); 
	let url = "http://localhost:8080/stud/webapi/student/update"; 

	// open a connection 
	xhr.open("POST", url, true); 

	// Set the request header i.e. which type of content you are sending 
	xhr.setRequestHeader("Content-Type", "application/json"); 

	// Create a state change callback 
	xhr.onreadystatechange = function () { 
		if (xhr.readyState === 4 && xhr.status === 200) { 

			// Print received data from server 
			result.innerHTML = this.responseText; 

		} 
	}; 

	// Converting JSON data to string 
	var data = JSON.stringify({ "id":id.value, "name": name.value, "age": age.value,"branch": branch.value,"section": section.value }); 

	// Sending data with the request 
	xhr.send(data); 
} 


function refreshPage(){
    window.location.reload();
}



function updateStudent(){ 
	
	let result = document.querySelector('.result'); 
	let name = document.querySelector('#name'); 
	let id = document.querySelector('#id'); 
	let age = document.querySelector('#age'); 
	let branch = document.querySelector('#branch'); 
	let section = document.querySelector('#section'); 
	
	// Creating a XHR object 
	let xhr = new XMLHttpRequest(); 
	let url = "http://localhost:8080/stud/webapi/student/update"; 

	// open a connection 
	xhr.open("POST", url, true); 

	// Set the request header i.e. which type of content you are sending 
	xhr.setRequestHeader("Content-Type", "application/json"); 

	// Create a state change callback 
	xhr.onreadystatechange = function () { 
		if (xhr.readyState === 4 && xhr.status === 200) { 

			// Print received data from server 
			result.innerHTML = this.responseText; 

		} 
	}; 

	// Converting JSON data to string 
	var data = JSON.stringify({ "id":id.value, "name": name.value, "age": age.value,"branch": branch.value,"section": section.value }); 

	// Sending data with the request 
	xhr.send(data); 
} 


function openWin() {
	  window.open("http://localhost:8080/stud/student.jsp");
	}
