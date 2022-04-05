import React, { useState } from 'react'
import InputField from '../components/InputField';

const Login = () => {
    const [inputValue, setInputValue] = useState({
        email: '',
        phone: '',
        message: ''
    })

    const handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        setInputValue({ ...inputValue, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputValue)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3 className='my-3'>Login</h3>
            <div className="mb-3">
                <InputField
                    name='email'
                    type='email'
                    inputClassName='form-control'
                    id='email'
                    placeholder="name@example.com"
                    label='Email address'
                    labelClass='form-label'
                    htmlFor="email"
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <InputField
                    type='tel'
                    inputClassName='form-control'
                    name='phone'
                    id='phone'
                    placeholder="+92-332-54415221"
                    label='Phone No...'
                    labelClass='form-label'
                    htmlFor="phone"
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea onChange={handleChange} className="form-control" name='message' id="exampleFormControlTextarea1" rows="3" placeholder='Your Message...'></textarea>
            </div>
            <div>
                <button className='btn btn-success'>Login</button>
            </div>
        </form>
    )
}

export default Login
