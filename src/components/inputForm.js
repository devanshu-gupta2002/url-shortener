import { useState } from "react";

const InputForm = ({setUrl}) => {
  const [value, setValue] = useState("")

  const handleClick = () => {
    setUrl(value)
    setValue("")
  }

  return (
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
  )
}

export default InputForm