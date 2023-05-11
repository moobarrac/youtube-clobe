import React from 'react'

const Spinner = () => {
  return (
    <div className='flex items-center w-full justify-center py-3'>
      <div className="w-10 h-10 border-2 border-solid border-red-600 rounded-full animate-spin border-t-transparent"></div>
    </div>
  )
}

export default Spinner