import React from 'react'
import Loader from './Loader'

function Navbar() {
    return (
        <div className="w-[100vw] bg-cp-primary text-white shadow-md z-[10000] h-[60px]">
            <Loader />
        </div>
    )
}

export default Navbar