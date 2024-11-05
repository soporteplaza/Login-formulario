import React from 'react'
import Logo from '../images/plaza-soft.webp'


const Footer = () => {


    return (
        <>
            <div className=" fixed bottom-0 h-16 w-full grid grid-cols-3 gap-4 items-center text-center justify-center">
                <div className="flex items-center text-center justify-center">
                    <img width={130} src={Logo} alt={Logo} />
                </div>
                <div style={{ color: '#6b7280' }}>
                    <p style={{ font: '15px' }}>© 2024 Plaza Software. All Rights Reserved.</p>
                </div>
                <div style={{ color: '#6b7280' }} className="lg:flex md:block justify-end pr-2">
                    <p className=' color font-bold mx-1'>Team</p>
                    <p className=' font-bold mx-1'>Contact</p>
                    <p className=' font-bold mx-1'>About</p>
                </div>
            </div>

        </>
    )
}

export default Footer