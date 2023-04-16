import React from 'react'
import "./Spinner.css";

const Spinnser = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='spinner'></div>
      <br></br>
      <h1 className='text-3xl font-extrabold'>
        Loading...</h1>
    </div>

  )
}

export default Spinnser