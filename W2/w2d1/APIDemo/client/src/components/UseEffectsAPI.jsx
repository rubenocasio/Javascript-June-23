//Import useState from react
//CryptoAPI URL string
//state variables
//axios
import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'

import ColorContext from '../contexts/ColorContext'

const UseEffectsAPI = () => {
    //State variables
  const [coin, setCoin] = useState([])
  const {themeColor, setThemeColor} = useContext(ColorContext)

  useEffect(() => {
      axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en")
        .then((response) => {
            console.log("Getting data from axios get: ", response.data)
            setCoin(response.data)
        })
        .catch((error) => {
            console.log("This is our useEffect API get error: ", error)
        })
        //async code
        console.log("I am texting someone while waiting on a promise lifecycle to finalize")
  }, [])

  const useEffectStyle = {
    backgroundColor: themeColor,
    color: "white"
  }

  return (
    <div style={useEffectStyle}>
        <h1>UseEffect API Demo</h1>
        <input type="color" class="form-control form-control-color" id="exampleColorInput" value="#563d7c" onChange={(e) => setThemeColor(e.target.value) }></input>
        {/* <button onClick={fetchData} className='btn btn-outline-dark'>Fetch Data!</button> */}
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

export default UseEffectsAPI