import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



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
<Router>
  <Navbar title="TextUtiL" aboutUS="About us" mode={mode} toggleMode={toggleMode}/>
  
 <Alert alert={alert}/>
 <div className="container">
 <Switch>
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/">
           <TextForm showAlert={showAlert}/>
          </Route>
          
 </Switch>
 </div>
 </Router>
 
    </>
  );
}

export default App;
