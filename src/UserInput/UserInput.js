import React from 'react'
import './UserInput.css'

const userInput = props => {
  return (
    <div className='UserInput'>
      <input type='text' onChange={props.handleChange} value={props.currentName} />
    </div>
  )
}

export default userInput
