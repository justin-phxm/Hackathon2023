import React from 'react'

export default function MyButton({onClick}: {onClick: () => void}) {

  return (
    // <div>myButton</div>
    <button onClick={onClick}>myButton</button>
  )
}
