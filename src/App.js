import './App.css';
import Button from './Componants/Button/Button';
import Card from './Componants/Cards/Card';



function App() {

  return (
    <div className="App" style={{ height: "100vh" }}>
      <div style={{ height: "100vh" }} className='container-fluid d-flex flex-column justify-content-evenly align-items-center'>
        <Button />
        <Card />

      </div>
    </div>
  );
}

export default App;
