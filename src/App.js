import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
//import About from './components/About';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";



function App() {
  const [mode,setMode] = useState('dark');

  const [alert, setAlert] = useState(null)

  const showAlert=(message,type)=>{
    setAlert({
    msg:message,
    type:type}
    )
    setTimeout(() => {
      setAlert(null)
      
    }, 3000);
  }


    const toggleMode=()=>{
      if( mode==='light')
      {
        setMode('dark')
        
      }
      else
      {
        setMode('light')
        
      }
  
    }
  
  return (
    <>
 
  <Navbar title="TextUtiL" aboutUS="About us" mode={mode} toggleMode={toggleMode}/>
  
 <Alert alert={alert}/>
 <div className="container">
 
            
        
           <TextForm showAlert={showAlert}/>
         
          

 </div>

 
    </>
  );
}

export default App;
