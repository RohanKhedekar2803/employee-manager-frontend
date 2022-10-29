import React from 'react'
import { useNavigate } from 'react-router-dom'
import EmployeeServices from './EmployeeServices'

const EachEmployee = ({employee, deleteEmployee }) => {
   const k=employee.id
   const navigate= useNavigate();

   const editEmployee=(e,id)=>{
    e.preventDefault();
    navigate(`/edit/${id}`);
  }

  return (
  
    <tr id="show">
        <td className='pl-6 pt-3 text-gray-500'>{employee.first_name}</td>
        <td className='pl-6 pt-3 text-gray-500'>{employee.last_name}</td>
        <td className='pl-6 pt-3 text-gray-500'>{employee.email}</td>
        <td  className='text-right'>
        <a href='#' className='p-3 text-purple-800 cursor-pointer'  onClick={(e)=>deleteEmployee(e,k)}  >Delete</a>
        <a href='#' className='p-3  text-purple-800' onClick={(e)=>editEmployee(e,k)}>Edit</a>
        </td>
    </tr>
  
  )
}

export default EachEmployee