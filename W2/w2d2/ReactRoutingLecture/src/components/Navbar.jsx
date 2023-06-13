import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
    const navigate = useNavigate()

    const goBackHandler = (num) => {
        // console.log(num)
        navigate(-num)
    }

    return (
        <div>
            <ul>
                <li>
                    <button onClick={() => goBackHandler(1)}>Back it up</button>
                </li>
                <li>
                    <button onClick={() => goBackHandler(2)}>Back it up two</button>
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/favFood">Favorite Food</Link>
                </li>
            </ul>
        </div>
    )
}
