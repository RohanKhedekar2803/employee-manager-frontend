import axios from "axios"
const BASE_URL="//localhost:8080/employee";
                     
class EmployeeServices{
    saveEmployee(employee){
        return fetch(BASE_URL,{
            method : "POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(employee)
          }).then(console.log("added succesfully"))
    }
    getEmployee(){
        return fetch(BASE_URL).then(res=>res.json())
        
    }
    deleteEmployee(id){
           return     fetch(BASE_URL+"/"+id, { method: 'DELETE' })
           
    }
    updateEmployee(id,employee){
           return fetch(BASE_URL+"/"+id,{method: 'PUT',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify(employee)})
    }
    getEmployeebyId(id){
        return fetch(BASE_URL+"/"+id).then(res=>res.json())
    }
}
export default new EmployeeServices();

 
  