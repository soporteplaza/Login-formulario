import React from 'react'
import Logo from '../images/plaza-soft.webp'


const Footer = () => {


    return (
        <>
            <div className="fixed bottom-0 w-full grid grid-cols-6 gap-4 items-center text-center justify-center mt-14 bg-white pt-3">
                <div className="col-start-1 col-end-3 ... flex items-center text-center justify-center">
                    <img width={100} src={Logo} alt={Logo} />
                    {/* <p style={{ color: colorRojo }} >Esye es un color rojo</p> */}
                </div>
                <div style={{ color: '#6b7280' }} className="col-end-7 col-span-2 ... lg:flex md:block justify-end pr-2">
                    <p className=' color font-bold mx-1'>Team</p>
                    <p className=' font-bold mx-1'>Contact</p>
                    <p className=' font-bold mx-1'>About</p>
                </div>
                <div className="mb-3 border-t-1 border-indigo-500  col-start-1 col-end-7 ...">
                    <p style={{ font: '15px' }}>© 2024 Plaza Software. All Rights Reserved.</p>
                </div>
            </div>
        </>
    )
}

export default Footer