import './App.css';
import Navbar from './components/Navbar';
const commonProps = { title: 'First Menu', aboutText: 'About Us' };
function App() {
  return (
    <>
      <Navbar  {...commonProps} />
    </>
  );
}

export default App;
