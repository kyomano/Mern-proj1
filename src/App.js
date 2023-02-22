import logo from './logo.svg';
import './App.css';
import MainBoard from './components/layout/mainboard';
import Navbar from './components/layout/navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <MainBoard></MainBoard>
    </div>
  );
}

export default App;
