import './style/App.css';
import { useState } from 'react';
import InputForm from './components/inputForm.js';

const App = () => {
  const [url, setUrl] = useState("")
  console.log(url)
  return (
    <div className="App">
      <InputForm setUrl={setUrl} />
    </div>
  );
}

export default App;
