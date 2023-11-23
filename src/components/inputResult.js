import { useEffect, useState } from "react"
import CopyToClipboard from "react-copy-to-clipboard";

const InputResult = ({url}) => {
  const [shortLink, setShortLink] = useState("")
  const [copy, setCopy] = useState("")

  const fetchTiny = () => {
    console.log("TinyURL")
    setShortLink("tinyurl")
  }

  const fetchTly = () => {
    console.log("Tly")
  }

  const fetchRebrandly = () => {
    console.log("Rebrandly")
  }

  return(
    <>
      <div>
        <h3>Choose your service:</h3>
        <div>
          <button onClick={fetchTiny}>TinyURL</button>
          <button onClick={fetchTly}>T.ly</button>
          <button onClick={fetchRebrandly}>Rebrandly</button>
        </div>
      </div>
      {shortLink && (
        <div className="result">
          <p>{shortLink}</p>
          <CopyToClipboard
            text={shortLink}
            onCopy={() => setCopy(true)}
          >
            <button className={copy ? "copied" : ""}>Copy to Clipboard</button>
          </CopyToClipboard>
        </div>
      )}
    </>
  )
}

export default InputResult