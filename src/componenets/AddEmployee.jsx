import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeServices from './EmployeeServices';
const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    id: "",
    first_name: "",
    last_name: "",
    email: ""
  });
  
  const handleEvent=(e)=>{
    const value =e.target.value
    setEmployee({...employee,[e.target.name]: value});
  }
    
  const navigate=useNavigate();
 
   const clearUser=(e)=>{
     e.preventDefault();
     setEmployee({
      id: "",
      first_name: "",
      last_name: "",
      email: ""
     })
   }

  const saveEmployee=(e)=>{
     e.preventDefault();
      EmployeeServices.saveEmployee(employee).then((response)=>{
      console.log(response)
      navigate("/show")
    
   }).catch((error)=>{
      console.log(error)
   })
  }
   
  return (
    <div className=' max-w-2xl border-b  items-center shadow  mx-auto'>
       <div  className='pt-8 px-8 mt-5'>
        <h1 className='text-2xl tracking-wider font-thin '> Add new employee</h1>
       </div>
       <div  className='px-8 '>
        <form onSubmit={saveEmployee}>
            <lable className=' text-gray-800 block pt-3'>First Name</lable>
              <input type={Text}  onChange={(e)=>handleEvent(e)} name="first_name" value={employee.first_name} className="border  w-60 h-8 text-sm text-gray-800" ></input>
          
              <lable className='font-normal text-gray-800 block'>Last Name</lable>
              <input type={Text}  onChange={(e)=>handleEvent(e)}  name="last_name" value={employee.last_name} className="border py-1 w-60 h-8 text-sm text-gray-800 " ></input>

              <lable className='text-gray-800 block'>Email</lable>
              <input type={Text}  onChange={(e)=>handleEvent(e)} name="email" value={employee.email} className="border py-1 w-60 h-8 text-sm text-gray-800 " ></input>
              <div className='my-4'>
                  <button  type="submit" className='border py-2 px-4 cursor-pointer bg-green-400 rounded'>Save</button>
                  <button onClick={clearUser}  className='border mx-4 py-2 px-4 cursor-pointer bg-red-400 rounded'>Delete</button>
              </div>
     
        </form>
          
            
       </div>
    </div>
  )
}

export default AddEmployee
// tracking-wider is to add space btn 2 characters