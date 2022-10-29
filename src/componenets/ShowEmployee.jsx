import React from 'react'
import { useNavigate } from 'react-router-dom'
import EmployeeServices from './EmployeeServices';
import { useState } from 'react';
import { useEffect } from 'react';
import EachEmployee from './EachEmployee';

const ShowEmployee = () => {
      const navigate=useNavigate(); //used to navigate uisng router
      const [employee, setemployee] = useState(null)
      const [loading, setloading] = useState(true)
      useEffect(() => {
        
        const fetchData=async ()=>{
          setloading(true)
          const response=await EmployeeServices.getEmployee();
          setemployee(response)
          setloading(false)          
        }
        fetchData();
      }, [])
    
       
     
      const deleteEmployee=(e,id)=>{
        e.preventDefault();
        console.log("called")
        EmployeeServices.deleteEmployee(id).then((res)=>{
            if(employee){
              setemployee((elements)=>{
                return elements.filter((elements=>elements.id!=id))
              })
            }
        })
      }
    
      
  return (

    <div className='container my-8 mx-auto'>
        <div className='max-w-5xl mt-3  m-auto'>
        <button  onClick={()=>navigate("/")} className='bg-gray-800  px-3 py-1 border rounded cursor-pointer text-white'>Add User</button>
          <div className='shadow-sm border-b'>
              <table className='min-w-full'>
                  <thead>
                    <tr className='text-left text-gray-800 font-medium'>
                      <td className='pl-6 pt-3'>First Name</td>
                      <td className='pl-6 pt-3'>Last Name</td>
                      <td className='pl-6 pt-3'>Email</td>
                      <td className='px-10 pt-3 text-right'>Acition</td>
                    </tr>
                  </thead>
                  {!loading &&(
                  <tbody>
                    {employee.map(employee=> (
                      
                      <EachEmployee employee={employee}
                      deleteEmployee={deleteEmployee}
                      key={employee.id}/>
                        
                    ))}
                  </tbody>
                  )}
              </table>
          </div>
        </div>
    </div>
  )
}

export default ShowEmployee