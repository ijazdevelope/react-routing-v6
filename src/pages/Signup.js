import React, { useState } from 'react'
import InputField from '../components/InputField'

const userValue = {
    fname: '',
    lname: '',
    email: '',
    message: ''
}

const Login = () => {
    const [data, setData] = useState([])
    const [inputValue, setInputValue] = useState({ ...userValue })

    const handleSubmit = (e) => {
        e.preventDefault()
        data.push(inputValue);
        localStorage.setItem('userData', JSON.stringify(data));
        setInputValue(userValue)
        console.log(data, 'setUserData')
    }
    const hanldeChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputValue({ ...inputValue, [name]: value });
    }

    return (
        <form className='row' onSubmit={handleSubmit} >
            <h3 className='my-3'>Sign Up</h3>
            <div className="mb-3 col-lg-6">
                <InputField
                    onChange={hanldeChange}
                    type="text"
                    inputClassName='form-control'
                    name='fname'
                    id="fname"
                    placeholder="First Name...."
                    label='First Name'
                    labelClass='form-label'
                    htmlFor="fname"
                    value={inputValue.fname}
                />
            </div>
            <div className="mb-3 col-lg-6">
                <InputField
                    onChange={hanldeChange}
                    type="text"
                    inputClassName='form-control'
                    name='lname'
                    id="lname"
                    placeholder="Last Name...."
                    htmlFor="lname"
                    label='Last Name'
                    labelClass='form-label'
                    value={inputValue.lname}
                />
            </div>
            <div className="mb-3">
                <InputField
                    onChange={hanldeChange}
                    type="email"
                    inputClassName='form-control'
                    name='email'
                    id="email"
                    placeholder="Last Name...."
                    htmlFor="email"
                    label='Email Address'
                    labelClass='form-label'
                    value={inputValue.email}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea value={inputValue.message} onChange={hanldeChange} className="form-control" name='message' id="exampleFormControlTextarea1" rows="3" placeholder='Your Message...'></textarea>
            </div>
            <div>
                <button className='btn btn-success'>Submit</button>
            </div>
        </form>
    )
}

export default Login
