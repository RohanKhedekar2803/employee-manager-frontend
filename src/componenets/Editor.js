import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import EmployeeServices from './EmployeeServices';
const Editor = () => {
     const {id}=useParams();
     const [employee, setEmployee] = useState({
        id: id,
        first_name: "",
        last_name: "",
        email: ""
      })
     useEffect(() => { 
        const fetchData=async ()=>{
            try{
                const response=await EmployeeServices.getEmployeebyId(id)    
                setEmployee(response)
            }catch(error){
                console.log(error)
            }
          
        }
        fetchData();
      }, [])
     
    

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
    
      const updateEmployee=(e)=>{
         e.preventDefault();
          EmployeeServices.updateEmployee(id,employee).then((response)=>{
          console.log(response)
          navigate("/show")
       }).catch((error)=>{
          console.log(error)
       })
      }
  return (
    <>
      <div className=' max-w-2xl border-b  items-center shadow  mx-auto'>
        <div  className='pt-8 px-8 mt-5'>
            <h1 className='text-2xl tracking-wider font-thin '> Edit employee</h1>
        </div>
            <div  className='px-8 '>
                <form  onSubmit={updateEmployee}>
                    <lable className=' text-gray-800 block pt-3'>First Name</lable>
                    <input type={Text}  onChange={(e)=>handleEvent(e)} name="first_name" value={employee.first_name} className="border  w-60 h-8 text-sm text-gray-800" ></input>
                
                    <lable className='font-normal text-gray-800 block'>Last Name</lable>
                    <input type={Text}  onChange={(e)=>handleEvent(e)}  name="last_name" value={employee.last_name} className="border py-1 w-60 h-8 text-sm text-gray-800 " ></input>

                    <lable className='text-gray-800 block'>Email</lable>
                    <input type={Text}  onChange={(e)=>handleEvent(e)} name="email" value={employee.email} className="border py-1 w-60 h-8 text-sm text-gray-800 " ></input>
                    <div className='my-4'>
                        <button  type="submit" className='border py-2 px-4 cursor-pointer bg-green-400 rounded'>Update</button>
                        <button   className='border mx-4 py-2 px-4 cursor-pointer bg-red-400 rounded' onClick={clearUser}>Clear</button>
                    </div>
            
                </form>
        
            
        </div>
    </div>
    </>
  )
}

export default Editor