import React from 'react'

const MyButton = ({children}) => {
  return (
    <button className="p-3 rounded-md bg-violet-500 text-white hover:bg-violet-500">{children}
    </button>
    
   
  )
}

export default MyButton;