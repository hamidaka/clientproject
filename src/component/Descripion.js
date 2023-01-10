import React from 'react'
import { useParams } from 'react-router-dom'

const Description = ({postList}) => {

  const params = useParams()
  console.log(params)
  console.log(postList)
  const lesposts = postList.find(el => el._id === +params.id)
   
  return (
    <div>
       <img src={lesposts.img} alt=''/> 
        {lesposts.desc} 
    </div>
  )
}

export default Description