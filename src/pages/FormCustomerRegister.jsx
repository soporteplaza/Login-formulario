import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FormRegister from '../components/FormRegister'
import Banner from '../images/800x600.png'
import PostFormRegister from '../components/PostFormRegister'

const FormCustomerRegister = () => {
    
    return (
        <>
            <Header />
            <div className="flex gap-2">
                <div className="w-3/5 text-center justify-center items-center hidden md:block lg:flex">
                    <img className=" rounded-md" src={Banner} alt={Banner} />
                </div>
                <div className=" shadow-xl rounded-lg justify-center flex items-center w-full md:w-2/5 lg:mr-5">
                    {/* <FormRegister /> */}
                    <PostFormRegister />
                </div>
            </div>
            <Footer />
        </>

    )
}

export default FormCustomerRegister