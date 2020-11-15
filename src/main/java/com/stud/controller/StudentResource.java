package com.stud.controller;


import java.sql.SQLException;
import java.util.List;

import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import com.stud.studentDao.StudentDao;
import com.stud.studentmodel.Student;


@Path("student")
public class StudentResource {

	StudentDao studentDao=new StudentDao();
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Student> getStudent() throws SQLException, ClassNotFoundException{
			List<Student> studs=studentDao.selectAllStudents();
			return studs;
			}
			
	

	@GET
	@Path("/get")
	@Produces(MediaType.APPLICATION_JSON)
	public Student getStudentById(@QueryParam("id") int id) throws SQLException, ClassNotFoundException{
			Student existingStudent= studentDao.selectStudent(id);
			return existingStudent;
			}

	
	@POST
	@Path("/add")
	@Produces(MediaType.APPLICATION_JSON)
	public Boolean insertStudent(Student stud) throws SQLException, ClassNotFoundException {
		//Student newStudent = new Student(stud);
		studentDao.insertStudentdb(stud);
		return true;
	}

	@POST
	@Path("/update")
	@Produces(MediaType.APPLICATION_JSON)
	public Boolean updateStudent(Student stud) throws SQLException, ClassNotFoundException{
		//Student studentUpdate= new Student(id, name, age, branch,section);
		studentDao.updateStudent(stud);
		return true;
	}
	
	@DELETE
	@Path("{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Student> deleteStudent(@PathParam("id") int id) throws SQLException, ClassNotFoundException {
		studentDao.deleteStudent(id);
		return getStudent();

	}
	
	
}


