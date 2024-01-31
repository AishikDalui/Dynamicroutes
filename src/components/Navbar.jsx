import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className=''>
            <ul className='flex gap-2 items-center'>
                <li >
                    <Link to={"/"}>HOME</Link>
                </li>
                <li>
                    <Link to={"/about"}>About</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar