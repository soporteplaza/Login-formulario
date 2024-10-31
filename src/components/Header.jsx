import React from 'react'
import Logo from '../images/plaza-soft.webp'

const Header = () => {
    return (
        <div className=" h-20 justify-center flex items-center bg-white mb-10 shadow">
            <img src={Logo} alt={Logo} />
        </div>
    )
}

export default Header