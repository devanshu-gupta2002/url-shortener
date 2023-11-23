import './style/App.css';
import { useState } from 'react';
import InputForm from './components/inputForm.js';
import InputResult from './components/inputResult.js';

const App = () => {
  const [url, setUrl] = useState("")
  console.log(url)
  return (
    <div className="App">
      <InputForm setUrl={setUrl} />
      {url && <InputResult url={url} />}
      
    </div>
  );
}

export default App;
