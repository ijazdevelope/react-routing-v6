import React from 'react'

const NotFound = () => {
    return (
        <div>
            <h3 className='text-center my-3'>Page NotFound!</h3>
            <div className='h-50 not_found'>
                <img
                    src='https://miro.medium.com/max/1200/1*EQisBuMOijQT8woW0Jn6pA.jpeg'
                    alt='path-not-found'
                    className='img-fluid rounded mx-auto d-block w-100 object-fit-contain'
                />
            </div>
        </div>
    )
}

export default NotFound
