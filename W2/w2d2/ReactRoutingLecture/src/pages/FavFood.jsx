import React from 'react'
import { useParams } from 'react-router'

export default function FavFood() {
    const { food = "pizza" } = useParams()
    return (
        <div>
            <h1>FavFood</h1>
            <p>Your favorite food is: <strong>{food}</strong></p>
        </div>
    )
}
