import React from 'react'

const Container = ({children}) => {
  return (
    <div className='max-w-6xl w-full
     border-red-500 mx-auto'>{children}</div>
  )
}

export default Container