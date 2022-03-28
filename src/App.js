import { Button, Spinner } from 'react-bootstrap';
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>using react bootstrap</h1>
      <Button variant='danger'>My button</Button> <br /> <br />
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

export default App;
