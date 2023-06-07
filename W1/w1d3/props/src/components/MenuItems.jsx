import React, {useState} from 'react'

const MenuItems = (props) => {
    const { dishName, price, children} = props

    const [like, setLikes] = useState(props.likes)
    
    const addLike = () => {
        setLikes(like + 1)
    }

    
  return (
    <div>
        <h3>Menu Items Component File</h3>
        <h1>{dishName}</h1>
        <p>Price: {price}</p>
        <h3>Number of likes: {like}</h3>
        <h4>{children}</h4>
        <button onClick={addLike}>Add me a Like Please!!</button>
    </div>
  )
}

export default MenuItems