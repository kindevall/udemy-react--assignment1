import React from 'react'

const userOutput = props => {
  return (
    <div className='UserOutput'>
      <p>Hello, I'm a paragraph!</p>
      <p>Current user: {props.username}</p>
    </div>
  )
}

export default userOutput
