import React from 'react'

const Skillset = ({skills}) => {
  return (
    <div>{
        skills.map((item,index)=><button key={index}>{item}</button>)
    }</div>
  )
}

export default Skillset