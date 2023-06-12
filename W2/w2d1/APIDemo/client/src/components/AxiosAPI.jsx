//Import useState from react
//CryptoAPI URL string
//state variables
//axios
import React, {useState} from 'react'
import axios from 'axios'

const AxiosAPI = () => {
    //State variables
  const [coin, setCoin] = useState([])

  const fetchData = () => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en")
    .then((response) => {
      console.log("This is our Axios get function: ", response.data)
      setCoin(response.data)
    })
    .catch((error) => {
      console.log("This is an error from our catch method: ", error)
    })
    //async code
    console.log("I am texting someone while waiting on a promise lifecycle to finalize")
  }

  return (
    <div>
        <h1>Axios API Demo</h1>
        <button onClick={fetchData} className='btn btn-outline-dark'>Fetch Data!</button>
        <hr />
        {
          coin.map((c, i) => {
            return (
              <div key={i}>
                <p>Unique Index value: {i}</p>
                <h1>{c.name}</h1>
                <h3>{c.id}</h3>
                <h4>{c.current_price}</h4>
                <img src={c.image} alt="Crypto Coin image" height="100px"/>
                <hr />
              </div>
            )
          })
        }
    </div>
  )
}

export default AxiosAPI