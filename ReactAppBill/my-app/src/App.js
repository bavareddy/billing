
import './App.css';
import { Welcome } from './Components/Welcome';

import { Form } from './Components/Form';
import { Billing } from './Components/Billing';
import jsPDF from 'jspdf';

function App() {
  return (
    <div className="App">
     
     <Welcome></Welcome>
      <Form></Form>
      <Billing></Billing>
      
    </div>
  );
}

export default App;
