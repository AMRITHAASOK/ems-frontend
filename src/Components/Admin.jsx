import React, { useEffect, useState } from "react";
import { MDBContainer, MDBNavbar, MDBNavbarBrand } from "mdb-react-ui-kit";
import { MDBFooter, MDBCol, MDBRow, MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import {MDBBadge,MDBTable,MDBTableHead,MDBTableBody,} from "mdb-react-ui-kit";
import axios from "axios";
import {Link, useParams} from 'react-router-dom'

function Admin() {


  
  //to hold all employee data 
  const [employee, setEmployee]=useState([])

  const fetchData=async()=>{
        const response= await axios.get('http://localhost:8000/getEmployees')
        console.log(response.data.employees);//array of employees
        setEmployee(response.data.employees)
  }
  console.log(employee);

  const deleteEmployee=async(id)=>{
      const result= await axios.delete('http://localhost:8000/deleteEmployee/'+id)
      console.log(result);
     alert(result.data.message);//delete employee successfully deleted
     fetchData()//fetch remaining data
  }



  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div>
      {/* navbar */}
      <MDBNavbar light bgColor="primary">
        <MDBContainer fluid>
          <MDBNavbarBrand href="" className="text-light">
            <i className="fa-solid fa-user-group me-2 text-light"></i>
            Employee Management System
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
      {/* main content */}

      <div className="container">
        <h1 className="text-center mx-5 mt-5 text-primary">
          Employee Management System
        </h1>
        <p style={{ textAlign: "justify" }}>
          Employee management is a practice that helps a manager improve
          employee productivity and satisfaction to help an organisation reach
          its goals. Human resources (HR) professionals often use an employee
          management system (EMS), including recruitment, offboarding and
          performance management. Using a dedicated EMS can help an HR manager
          streamline the hiring process and improve workplace efficiency. In
          this article, we discuss what an employee management systems is,
          outline its benefits and types and list some examples of employee
          management software tools.
        </p>

<Link to={'/add'}>
        <a  style={{ marginLeft: "1000px" }}className="btn btn-primary my-5">
          Add
          <i className="fa-solid fa-user-plus"></i>
        </a>
</Link>
        

        <div className="table">
          <MDBTable align="middle">
            <MDBTableHead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Title</th>
                <th scope="col">Position</th>
                <th scope="col">Salary</th>
                <th scope="col">Actions</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
             {
              employee.map((item)=>(
<tr>
                <td>{item.id}</td>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="ms-3">
                      <p className="fw-bold mb-1">{item.empname}</p>
                    </div>
                  </div>
                </td>
                <td>
                 {item.age}
                </td>
                <td>
                <th scope='col'>{item.title}</th>
                </td>
                <td>{item.position}</td>
                <td>{item.salary}</td>
                <td>
                 <Link to={'edit/'+item.id}>
                 <MDBBtn color="link" rounded size="sm">
                    <i className="fa-solid fa-pen text-info"></i>
                  </MDBBtn>
                 </Link>
                  <MDBBtn onClick={()=>deleteEmployee(item.id)} color="link" rounded size="sm">
                  <i className="fa-solid fa-trash text-danger"></i>
                  </MDBBtn>
                </td>
              </tr>
              ))
             } 
              
             
            </MDBTableBody>
          </MDBTable>
        </div>
      </div>

      {/* footer */}
      <MDBFooter className="text-center text-white bg-primary">
        <MDBContainer className="pt-4">
          <section className="mb-4 ">
            <MDBBtn
              rippleColor="dark"
              color="link"
              floating
              size="lg"
              className="text-light me-3 p-2"
              href="#!"
              role="button"
            >
              <MDBIcon fab className="fab fa-facebook-f" />
            </MDBBtn>

            <MDBBtn
              rippleColor="dark"
              color="link"
              floating
              size="lg"
              className="text-light me-3 p-2"
              href="#!"
              role="button"
            >
              <MDBIcon fab className="fa-twitter" />
            </MDBBtn>

            <MDBBtn
              rippleColor="dark"
              color="link"
              floating
              size="lg"
              className="text-light m-1 p-2"
              href="#!"
              role="button"
            >
              <MDBIcon fab className="fa-google" />
            </MDBBtn>

            <MDBBtn
              rippleColor="dark"
              color="link"
              floating
              size="lg"
              className="text-light m-1 p-2"
              href="#!"
              role="button"
            >
              <MDBIcon fab className="fa-instagram" />
            </MDBBtn>

            <MDBBtn
              rippleColor="dark"
              color="link"
              floating
              size="lg"
              className="text-light m-1 p-2"
              href="#!"
              role="button"
            >
              <MDBIcon fab className="fa-linkedin" />
            </MDBBtn>

            <MDBBtn
              rippleColor="dark"
              color="link"
              floating
              size="lg"
              className="text-light m-1 p-2"
              href="#!"
              role="button"
            >
              <MDBIcon fab className="fa-github" />
            </MDBBtn>
          </section>
        </MDBContainer>

        <div
          className="text-center text-light p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2023 Copyright:
          <a className="text-light" href="">
            employeemanagementsystem.com
          </a>
        </div>
      </MDBFooter>
    </div>
  );
}

export default Admin;
