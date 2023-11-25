import { useState } from "react";
import isUrl from 'is-url'

const InputForm = ({setUrl}) => {
  const [value, setValue] = useState("")
  const [error, setError] = useState(false)

  const handleClick = () => {
    setUrl(value)
    if(!isUrl(value)) {
      setError(true)
      setUrl("")
      setTimeout(() => {
        setError(false)
      }, 2000);
    }
  }


  return (
    <div>
    <div className="inputForm">
      <h1>URL <span>Shortener</span></h1>
        <div>
          <input
            type="text"
            placeholder="Enter URL"
            value={value}
            onChange={e => setValue(e.target.value)}
            />
          <button onClick={handleClick}>Next</button>
        </div>
    </div>
    <div>
    {error && <p className="notification">Enter a valid URL</p>}
    </div>
    </div>
  )
}

export default InputForm