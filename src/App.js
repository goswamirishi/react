import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

const commonProps = { title: 'First Menu', aboutText: 'About Us' };
function App() {
  return (
    <>
      <Navbar  {...commonProps} />
      <div className="container my-3">
        <TextForm heading="Enter the text" />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
