import axios from 'axios'
import { useEffect, useState } from "react"
import CopyToClipboard from "react-copy-to-clipboard";

const InputResult = ({url}) => {
  const [shortLink, setShortLink] = useState("")
  const [copy, setCopy] = useState("")
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchTiny = async () => {
    try {
      setLoading(true);
      const tokenUrl = "https://api.tinyurl.com/create?api_token=WhCS6G04kbQysZqyej1Ll8vpWbJHphMmn6VJc5iK8rGIZM5iq4r59HjWGk2A";
      const body = {
        "url": url,
        "domain": "tinyurl.com",
        "description": "string"
      };
  
      const res = await axios.post(tokenUrl, body);
      // console.log(res.data.data.tiny_url)
      setShortLink(res.data.data.tiny_url);
    } catch(err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  const fetchTly = () => {
    console.log("Tly")
  }

  const fetchRebrandly = () => {
    console.log("Rebrandly")
  }

  if(loading) {
    return <p className="notification">Fetching Short URL</p>
  }
  if(error) {
    return <p className="notification">Something went wrong</p>
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