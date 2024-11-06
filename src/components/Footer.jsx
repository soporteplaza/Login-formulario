import React from 'react'
import Logo from '../images/plaza-soft.webp'


const Footer = () => {


    return (
        <>
            <div className="  bottom-0 h-16 mt-16 w-full grid grid-cols-3 gap-4 items-center text-center justify-center bg-white">
                <div className="flex items-center text-center justify-center">
                    <img width={130} src={Logo} alt={Logo} />
                </div>
                <div style={{ color: '#6b7280' }}>
                    <p style={{ font: '15px' }} className=' lg:text-sm  text-xs '>© 2024 Plaza Software. All Rights Reserved.</p>
                </div>
                <div style={{ color: '#6b7280' }} className="lg:flex md:block justify-end pr-2 lg:text-sm  text-xs ">
                    <p className=' color font-bold mx-1'>Team</p>
                    <p className=' font-bold mx-1'>Contact</p>
                    <p className=' font-bold mx-1'>About</p>
                </div>
            </div>

        </>
    )
}

export default Footer