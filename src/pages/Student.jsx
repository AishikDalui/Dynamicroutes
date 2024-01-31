import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {student} from '../data'


const Student = () => {
    const roll=useParams().roll
    // const [curStudent, setcurStudent] = useState()
    const getStudent=(roll)=>{
        const ele= student.find((element)=>element.roll===roll)
        console.log(ele)
        // setcurStudent(ele);
    }
    const curStudent=getStudent(roll)

   

    // useEffect(() => {
    //     // console.log(roll)
    //     getStudent(roll);
    // }, [roll])

  return curStudent? (
    <div>
        <div>{curStudent.name}</div>
        <div>{curStudent.roll}</div>
    </div>
  ): <p>Loading..</p>
}

export default Student