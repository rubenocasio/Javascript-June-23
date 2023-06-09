import React from 'react'

const IceCreamDashboard = (props) => {

    const handleDelete = (idx) => {
        console.log(idx)
        props.onDelete(idx)
    }

  return (
    <div>
        <h1>IceCream Dashboard</h1>
        <table className='table'>
            <thead>
                <tr>
                    <th>Flavor</th>
                    <th>Quantity</th>
                    <th>Cost</th>
                    <th>Sprinkles</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.icecreamList.map((eachIcecream, index) => {
                        return (
                            <tr key={index}>
                                <td>{eachIcecream.flavor}</td>
                                <td>{eachIcecream.quantity}</td>
                                <td>{eachIcecream.cost}</td>
                                <td>{eachIcecream.sprinkles ? "Yes" : "No"}</td>
                                <td><button onClick={() => handleDelete(index)} className='btn btn-outline-danger'>Delete</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>

    </div>
  )
}

export default IceCreamDashboard