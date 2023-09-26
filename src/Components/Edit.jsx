import React, { useEffect, useState } from "react";
import { MDBContainer, MDBNavbar, MDBNavbarBrand } from "mdb-react-ui-kit";
import { MDBFooter, MDBCol, MDBRow, MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import {MDBBadge,MDBTable,MDBTableHead,MDBTableBody,} from "mdb-react-ui-kit";
import axios from "axios";
import {Link, useNavigate, useParams} from 'react-router-dom'
import { MDBInput } from 'mdb-react-ui-kit';

function Edit() {

  const location = useNavigate()
  const [id,setId]=useState('')
  const [empname,setEmpname]=useState('')
  const [age,setAge]=useState('')
  const [title,setTitle]=useState('')
  const [position,setPosition]=useState('')
  const [salary,setSalary]=useState('')
    //get path parameter from url
    const params =useParams()
    console.log(params); //{id:'45'}
    console.log(params.id); //45

    //get particular employee details
    const fetchEmployee = async()=>{
      const result = await axios.get('http://localhost:8000/getEmployee/'+params.id)
      console.log(result.data.employee);
      setId(result.data.employee.id)
      setEmpname(result.data.employee.empname)
      setAge(result.data.employee.age)
      setTitle(result.data.employee.title)
      setPosition(result.data.employee.position)
      setSalary(result.data.employee.salary)

    }
    console.log(id);
    //update employee
    const updateEmployee =async()=>{
        const body={id,empname, age, title,position,salary}
        const result = await axios.post('http://localhost:8000/updateEmployee',body)
        console.log(result.data.message);
        alert(result.data.message)
        location('/')
    }
  

    useEffect(()=>{
      fetchEmployee()
    },[])

  return (
    <div>
    {/* navbar */}
    <MDBNavbar light bgColor="primary">
     <MDBContainer fluid>
       <MDBNavbarBrand href="/" className="text-light">
         <i className="fa-solid fa-user-group me-2 text-light"></i>
         Employee Management System
       </MDBNavbarBrand>
     </MDBContainer>
   </MDBNavbar>
   {/* main content */}

   <div className="container">
   <h1 className="text-center mx-5 mt-5 text-primary">
     Update Employee Details
     </h1>
   </div>
   {/* form */}
   <div className="container">
   <MDBInput value={id} onChange={(e)=>setId(e.target.value)} wrapperClass='mb-4' id='form9Example1' label='Id' />
   <MDBInput value={empname} onChange={(e)=>setEmpname(e.target.value)} wrapperClass='mb-4' id='form9Example1' label='Name' />
   <MDBInput    value={age} onChange={(e)=>setAge(e.target.value)} wrapperClass='mb-4' id='form9Example1' label='Age' />
   <MDBInput value={title} onChange={(e)=>setTitle(e.target.value)} wrapperClass='mb-4' id='form9Example1' label='Title' />
   <MDBInput value={position} onChange={(e)=>setPosition(e.target.value)} wrapperClass='mb-4' id='form9Example1' label='Position' />
   <MDBInput value={salary} onChange={(e)=>setSalary(e.target.value)} wrapperClass='mb-4' id='form9Example2' label='Salary'  />
   <MDBBtn onClick={(e)=>updateEmployee(e)} type='submit' className='mb-4' block>
           Update Employee
         </MDBBtn>
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

  )
}

export default Edit