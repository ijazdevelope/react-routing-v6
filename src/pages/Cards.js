import React from 'react'

const Cards = () => {
    return (
        <section className='p-3'>
            <h4>Our Cards</h4>
            <div className='row justify-content-between'>
                <main className='col-lg-4 col-md-6'>
                    <div className="card">
                        <img src={'https://picsum.photos/id/237/200/100'} className="card-img-top" alt="card-img" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </main>
                <main className='col-lg-4 col-md-6'>
                    <div className="card">
                        <img src={'https://picsum.photos/seed/picsum/200/100'} className="card-img-top" alt="card-img" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-success">Go To Mountains</a>
                        </div>
                    </div>
                </main>
                <main className='col-lg-4 col-md-6 my-md-3 my-lg-0'>
                    <div className="card">
                        <img src={'https://picsum.photos/200/100?grayscale'} className="card-img-top" alt="card-img" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-secondary">Go To WaterFall</a>
                        </div>
                    </div>
                </main>
            </div>
        </section>
    )
}

export default Cards
