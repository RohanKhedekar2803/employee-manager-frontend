import './App.css';
import AddEmployee from './componenets/AddEmployee';
import Navbar from './componenets/Navbar';
import ShowEmployee from './componenets/ShowEmployee';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Editor from './componenets/Editor';
function App() {
  return (
    <>
    <Navbar />
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<AddEmployee />} />
            <Route path='/show' element={<ShowEmployee />} />
            <Route path='/edit/:id' element={<Editor />} />
            <Route path='/edit' element={<AddEmployee/>} />
        </Routes>
    </BrowserRouter>
    
 
          
          
      
    </>
      
  );
}

export default App;
