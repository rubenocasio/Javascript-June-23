import React, {useState} from 'react'

//input : state variables (flavor, quantity, cost, sprinkles)
//handleSubmit
const IceCreamForm = (props) => {
    const [flavor, setFlavor] = useState("")
    const [quantity, setQuantity] = useState(1)
    const [cost, setCost] = useState("")
    const [sprinkles, setSprinkles] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const newIcecream = {flavor, quantity, cost, sprinkles}
        props.onNewOrder(newIcecream)
    }

  return (
    <div>
        <h1>IceCream Form</h1>
        <form className='form-group' onSubmit={handleSubmit}>
            <div>
                <label>Flavor</label>
                <select name="flavor" value={flavor} onChange={(e) => setFlavor(e.target.value)} className='form-control'>
                    <option hidden>Please choose your flavor</option>
                    <option value="pistachio">Pistachio</option>
                    <option value="chocolate">Chocolate</option>
                    <option value="Vanilla">Vanilla</option>
                    <option value="Rocky Road">Rocky Road</option>
                    <option value="strawberry">Strawberry</option>
                </select>
            </div>
            <div>
                <label>Quantity</label>
                <input type="number" name='quantity' value={quantity} onChange={(e) => {setQuantity(e.target.value)}} className='form-control'/>
            </div>
            <div>
                <label>Cost</label>
                <input type="number" name='cost' value={cost} onChange={(e) => {setCost(e.target.value)}} className='form-control'/>
            </div>
            <div>
                <label>Sprinkles?</label>
                <input type="checkbox" name='sprinkles' value={sprinkles} onChange={(e) => {setSprinkles(e.target.value)}}/>
            </div>
            <div>
                <button className='btn btn-outline-primary mt-2'>Add to Order</button>
            </div>
        </form>
    </div>
  )
}

export default IceCreamForm