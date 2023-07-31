import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

const commonProps = { title: 'First Menu', aboutText: 'About Us' };
function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar  {...commonProps} mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter the text" mode={mode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
