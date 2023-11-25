import axios from 'axios'
import { useState } from "react"
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

  const fetchTly = async () => {
    try {
      setLoading(true);
      const apiUrl = 'https://t.ly/api/v1/link/shorten'
      const apiToken = '0Lde9zM5iKdQDjQKmfJ2tufNwQWV6RzrRIF4mmt8DfelaRpRX2DluAGbrGRG'
      const requestData = {
          long_url: url,
          domain: "https://t.ly/"
      }
      const response = await axios.post(apiUrl, requestData, {
        headers: {
          Authorization: `Bearer ${apiToken}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
  
      setShortLink(response.data.short_url)
    } catch(err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  const fetchRebrandly = async() => {
    try{
      setLoading(true);
      const headers = {
        "Content-Type": "application/json",
        "apikey": "f4bae0bcd569444fabf655d411c946ab"
      }
      let endpoint = "https://api.rebrandly.com/v1/links";
      let linkRequest = {
        destination: url,
        domain: { fullName: "rebrand.ly" }
      }
      const apiCall = {
          method: 'post',
          url: endpoint,
          data: linkRequest,
          headers: headers
      }
      let apiResponse = await axios(apiCall);
      let link = apiResponse.data;
      console.log(link)
      setShortLink(link.shortUrl);
    } catch(err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  if(loading) {
    return <p className="notification">Fetching Short URL</p>
  }
  if(error) {
    return <p className="notification">An error occured creating the short url :(</p>
  }

  return(
    <>
      <div className='inputResult'>
        <h2>Choose your service:</h2>
        <div>
          <button onClick={fetchTiny}>TinyURL</button>
          <button onClick={fetchTly}>T.ly</button>
          <button onClick={fetchRebrandly}>Rebrandly</button>
        </div>
      </div>
      {shortLink && (
  <div className="result">
      <p>{shortLink}
      <CopyToClipboard text={shortLink} onCopy={() => setCopy(true)}>
        <button className={copy ? "copied" : ""}>Copy</button>
      </CopyToClipboard>
      </p>
  </div>
)}
    </>
  )
}

export default InputResult