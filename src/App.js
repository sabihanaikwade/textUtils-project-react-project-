
import { useState } from 'react';
import './App.css';

import Alert from './components/Alert';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light') //whether dark mode is enable or not
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
      showAlert('Dark mode has been enabled', 'success')
      document.title = 'TextUtils-Dark mode'
      setTimeout(() => {
        document.title = 'TextUtils is Amazing'
      }, 2000);
      setTimeout(() => {
        document.title = 'Install textUtils Now'
      }, 1500);
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('light mode has been enabled', 'success')
      document.title = 'TextUtils-light mode'
      setTimeout(() => {
        document.title = 'TextUtils is Amazing'
      }, 2000);
      setTimeout(() => {
        document.title = 'Install textUtils Now'
      }, 1500);
    }
  }

  const togglebMode = () => {
    if (mode === 'light') {
      setMode('blue')
      document.body.style.backgroundColor = 'skyblue'
      showAlert('Dark mode has been enabled', 'success')
      document.title = 'TextUtils-blue mode'
      setTimeout(() => {
        document.title = 'TextUtils is Amazing'
      }, 2000);
      setTimeout(() => {
        document.title = 'Install textUtils Now'
      }, 1500);
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('light mode has been enabled', 'success')
      document.title = 'TextUtils-light mode'
      setTimeout(() => {
        document.title = 'TextUtils is Amazing'
      }, 2000);
      setTimeout(() => {
        document.title = 'Install textUtils Now'
      }, 1500);
    }
  }
  return (

    
      <Router>
        <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} togglebMode={togglebMode}/>
        <Alert alert={alert} />
        <div className="container my-3">
        <Switch>
          <Route path='/about'>
              <About />
          </Route>

          <Route path='/'>
            <TextForm showAlert={showAlert} heading="TextUtis-word counter,character counter" mode={mode} />
          </Route>
           
          </Switch>
        </div>
      </Router>
    

  );
}

export default App;
