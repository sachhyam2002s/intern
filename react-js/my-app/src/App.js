import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Form from './components/TempForm';
import React, { useState } from 'react';



function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title="App" aboutPage="About app" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">  {/* my-3 refers to 'margin y-axis'-3 gap && mx refers to 'margin x-axis'*/}
        <Form heading="Enter your details" mode={mode}/>
        <About mode={mode}/>
      </div>
    </>
  );
}

export default App;
