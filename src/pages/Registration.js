import React, { useState } from 'react'
import registration from '../components/images/registration.png'
import Login from './Login'
import Signup from './Signup'

const Registration = () => {
    const [tabs, setTabs] = useState(false)

    return (
        <div className='container'>
            <div className='row'>
                <header className='text-center mt-3'>
                    <button className='px-3 py-2 border-0 rounded me-3' onClick={() => setTabs(false)} >Login</button>
                    <button className='px-3 py-2 border-0 rounded' onClick={() => setTabs(true)} >Signup</button>
                </header>
                <div className="col-lg-6">
                    <img className='w-100' src={registration} alt="registraion-img" />
                </div>
                <div className="col-lg-6 px-sm-5 px-md-0">
                    {tabs ? <Signup /> : <Login />}
                </div>
            </div>
        </div>
    )
}

export default Registration
