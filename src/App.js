import logo from './logo.svg';
import './App.css';
import Device from './components/Device/Device';

function App() {
  return (
    <div className="App " style={{ border: '2px solid green', margin: '20px' }}>
      <Device name={'uPhone'}></Device>
    </div>
  );
}

export default App;
