import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
const commonProps = { title: 'First Menu', aboutText: 'About Us' };
function App() {
  return (
    <>
      <Navbar  {...commonProps} />
      <div className="container my-3">
        <TextForm heading="Enter the text" />
      </div>
    </>
  );
}

export default App;
