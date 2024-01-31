import React from 'react'
import { student } from '../data'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
        {student.map((item)=>(
            <div key={item.roll}>
                <h1>{item.name}</h1>
                <Link to={`/student/${item.roll}`}>Details</Link>
            </div>
        ))}
    </div>
  )
}

export default About