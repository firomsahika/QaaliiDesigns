import React from 'react'

interface Label{
    label:String
}

const Button = ({label:label}) => {
  return (
    <button className='bg-[#0D0C22] text-white px-14 py-3 rounded-full'>
        {label}
    </button>
  )
}

export default Button
