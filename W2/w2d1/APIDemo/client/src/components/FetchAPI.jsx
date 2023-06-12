//Import useState from react
//CryptoAPI URL string
//state variables
//fetch
import React, {useState} from 'react'


const FetchAPI = () => {
  const [coin, setCoin] = useState([])

  const fetchData = () => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en")
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      console.log(response)
      setCoin(response)
    })
    .catch((error) => {
      console.log("This is an error from our catch method: ", error)
    })
  }

  return (
    <div>
        <h1>Fetch API Demo</h1>
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

export default FetchAPI