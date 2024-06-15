import React from 'react'
import { Link } from 'react-router-dom'

function Home3() {
    return (
        <div>
            <h1>Home3</h1>
            <Link to={'/'}>
                <button>home1</button>
            </Link>
        </div>
    )
}

export default Home3