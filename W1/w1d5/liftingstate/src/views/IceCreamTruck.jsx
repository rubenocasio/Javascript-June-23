import React, {useState} from 'react'
import IceCreamForm from '../components/IceCreamTruck/IceCreamForm'
import IceCreamDashboard from '../components/IceCreamTruck/IceCreamDashboard'

const IceCreamTruck = () => {
    const [icecreamList, setIcecreamList] = useState([])

    const receiveOrder = (newOrder) => {
        setIcecreamList([...icecreamList, newOrder])
    }
    const removeFromList = (deleteIdx) => {
        console.log("This removefromlist", deleteIdx)
        const filteredList = icecreamList.filter((ruben, idx) => idx !== deleteIdx )
        setIcecreamList(filteredList)
    }

  return (

    <div>
        <h1>IceCream Dashboard</h1>
        <IceCreamForm onNewOrder={receiveOrder}/>
        <IceCreamDashboard icecreamList={icecreamList} onDelete={removeFromList}/>
    </div>
  )
}

export default IceCreamTruck