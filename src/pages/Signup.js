import React, { useState } from 'react'

const Login = () => {
    const [inputValue, setInputValue] = useState({
        fname: '',
        lname: '',
        email: '',
        message: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputValue)
    }
    const hanldeChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputValue({ ...inputValue, [name]: value })
    }

    return (
        <form className='row' onSubmit={handleSubmit}>
            <h3 className='my-3'>Sign Up</h3>
            <div className="mb-3 col-lg-6">
                <label htmlFor="fname" className="form-label">First Name</label>
                <input onChange={hanldeChange} type="text" className="form-control" name='fname' id="fname" placeholder="First Name...." />
            </div>
            <div className="mb-3 col-lg-6">
                <label htmlFor="lname" className="form-label">Last Name</label>
                <input onChange={hanldeChange} type="text" className="form-control" name='lname' id="lname" placeholder="Last Name..." />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input onChange={hanldeChange} name='email' type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea onChange={hanldeChange} className="form-control" name='message' id="exampleFormControlTextarea1" rows="3" placeholder='Your Message...'></textarea>
            </div>
            <div>
                <button className='btn btn-success'>Submit</button>
            </div>
        </form>
    )
}

export default Login
