import React from 'react'
import { useLocation } from 'react-router-dom'

const Contact = () => {
    const location = useLocation()
    console.log(location)
    return (
        <div>
            <div className="container">
                <div className="row col-8 mx-auto">
                    <h3 className='my-3'>Contact Us! </h3>
                    <div class="mb-3 col-lg-6">
                        <label for="fname" class="form-label">First Name</label>
                        <input type="text" class="form-control" id="fname" placeholder="First Name..." />
                    </div>
                    <div class="mb-3 col-lg-6">
                        <label for="lname" class="form-label">Last Name</label>
                        <input type="text" class="form-control" id="lname" placeholder="Last Name..." />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div>
                        <button className='btn btn-success'>Submit...</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
