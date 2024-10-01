import './App.css';
import React, {useState} from 'react'

//REACT ROUTER
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

//COMPONENTS
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import Alert from './components/Alert';
// import About from './components/About';

export default function App() {

  const [alert, setAlert] = useState(null);

  const giveAlert = (message, typeOfAlert) => {
    setAlert({
      message: message,
      typeOfAlert: typeOfAlert
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const [mode, setMode] = useState('light');

  const switchMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#142433';
      document.body.style.color = 'antiquewhite';
      giveAlert("Switched to Dark Mode", "success")
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'antiquewhite';
      document.body.style.color = 'black';
      giveAlert("Switched to Light Mode", "success")

    }
  }

  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" mode={mode} switchMode={switchMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      {/* <Routes>
          <Route path="/about" element={<About />}/>          
          <Route path="/" element={}/>
      </Routes> */}
      <TextArea header="Enter Text to Analyse Below" giveAlert={giveAlert}/>
    </div>
    {/* </Router> */}
    </>
  );
}

