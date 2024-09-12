import React from 'react'
import Navbar from '../components/navbar'
const about:React.FunctionComponent = () => {
  return (
    <>
    <Navbar/>
    <h3 className="text-lg font-bold">About</h3>
    <div>
        <p>This is a simple e-commerce website created using React.js and Tailwind CSS. It has a Home, About, and Products page.</p>
    </div>
    </>
  )
}

export default about