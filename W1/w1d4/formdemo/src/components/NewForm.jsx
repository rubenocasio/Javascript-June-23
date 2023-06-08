import React, { useState } from 'react'

const darkMode = {
    backgroundColor: "black",
    color: "white",
}
const lightMode = {
    backgroundColor: "white",
    color: "black",
}

const NewForm = () => {

    //State variables name, type, age, img
    const [formData, setFormData] = useState({
        name: '',
        type: '',
        age: '',
        img: ''
    })

    let [listOfPets, setListOfPets] = useState([])

    const [light, setLight] = useState(true)
    const lightSwitch = () => setLight(!light)

    const inputHandler = (e) => {
        const {name, value} = e.target;
        setFormData((prevState) => ({...prevState, [name]: value}))
    }

    const submitHandler = (e) => {
        e.preventDefault()
        
        setListOfPets((prevState) => [...prevState, formData])
        setFormData({
            name: '',
            type: '',
            age: '',
            img: ''
        })
    }

    const deletePet = (idx) => {
        console.log("Deleting this pet: ", idx)

        let filteredCopy = listOfPets.filter((pet, i) => {
            console.log("Pet and index values being passed to our filter: ", pet, idx)
            return i !== idx
        })
        setListOfPets(filteredCopy)
    }

  return (
    <div style={light ? lightMode : darkMode}>

        <h1>Form Demo</h1>
        <button onClick={lightSwitch} className='btn btn-outline-dark'>{light ? "Dark Mode" : "Light Mode" }</button>

        <form onSubmit={submitHandler}>
            <div className='form-group'>
                <label>Pet Name: </label> 
                <input type="text" onChange={inputHandler} name='name' className='form-control' value={formData.name}/>
            </div>
            <div className='form-group'> 
                <label>Pet Type: </label> 
                <input type="text" onChange={inputHandler} name='type' className='form-control' value={formData.type}/>
            </div>
            <div className='form-group'>
                <label>Pet Age: </label>
                <input type="number" onChange={inputHandler} name='age' className='form-control' value={formData.age}/>
            </div>
            <div className='form-group'>
                <label>Pet Image: </label>
                <input type="text" onChange={inputHandler} name='img' className='form-control' value={formData.img}/>
            </div>
            <input type="submit" value="Add Pet" className='btn btn-primary mt-3'/>
        </form>
        <hr />
        <div className='pet-list'>
            {
                listOfPets.map((pet, index) => {
                    return (
                        <div key={index}>
                            <h3>{pet.name}</h3>
                            <p>This is the index value to this pet: {index}</p>
                            <h4>{pet.type}</h4>
                            <h5>{pet.age}</h5>
                            <img src={pet.img} alt="Pet Pic" height="200px"/>
                            <br />
                            <button onClick={() => deletePet(index)} className='btn btn-outline-dark mt-3'>Delete Pet</button>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
        <br />
        <br />
        <br />
        <br />
    </div>
  )
}

export default NewForm