import { useState } from 'react';
import Navbar from './Components/Navbar';
import Textforms from './Components/Textforms';
import About from './Components/About';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light')
  const [text, settext] = useState("Enable Dark Mode")
  const [alert, setalert] = useState(null);

  const showalert=(message,type)=>{
     setalert({
        msg: message,
        type: type
     })
     setTimeout(() => {
      setalert(null);
     }, 2000);
  }

  const onSwitch = ()=>{
    if(mode === 'light'){
      setmode('dark')
      settext("Enable Light Mode")
      document.body.style.backgroundColor = '#051a2e'
      showalert("Dark mode has been enabled!","success")
      document.title='TextUtility- Dark Mode Enabled'
    }
    else{
      setmode('light')
      settext("Enable Dark Mode")
      document.body.style.backgroundColor = 'white'
      showalert("Light mode has been enabled!","success")
      document.title='TextUtility-Home'
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtility" mode={mode} text={text} onSwitch={onSwitch}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
      <Route exact path="/about" element={<About mode={mode}/>}/>
      <Route exact path="/" element={<Textforms heading="Enter your text to analyze here" mode={mode} showalert={showalert}/>}/>
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
