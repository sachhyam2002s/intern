import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Form from './components/TempForm';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode enabled","success");
      document.title = 'My App - Dark mode'
      // setInterval( ()  =>{
      //   document.title = 'My app is running'
      // },2000);
      // setInterval( ()  =>{
      //   document.title = 'Welcome to my app'
      // },1500);
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled","success");
      document.title = 'My App - Light mode'
    }
  }

  return (
    <>
    {/* <Router> */}
      <Navbar title="App" aboutPage="About app" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>

      <div className="container my-3">  {/* my-3 refers to 'margin y-axis'-3 gap && mx refers to 'margin x-axis'*/}
        {/* <Routes> */}
          {/* use exact so that the code selects the exact path and the website doesnot render */}
          {/* <Route exact path="/about" element = {<About mode={mode}/>}/>
          <Route exact path="/form" element = {<Form showAlert={showAlert} heading="Enter your details" mode={mode}/>}/> */}
        {/* </Routes> */}
        <About mode={mode}/>
        <Form showAlert={showAlert} heading="Enter your details" mode={mode}/>
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
