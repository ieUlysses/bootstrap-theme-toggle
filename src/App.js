import './App.css';
import Button from './Componants/Button/Button';
import Card from './Componants/Cards/Card';
import "./Styles/Styles.css"


function App() {

  return (
    <div className="App">
      <div style={{ height: "100vh" }} className='container-fluid d-flex justify-content-center align-items-center'>
        <Button />
        <Card />
      </div>
    </div>
  );
}

export default App;
