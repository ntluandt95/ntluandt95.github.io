import React from 'react'

const Header = () => {
    return (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
            <h5 className="my-0 mr-md-auto font-weight-normal">Thanh Nguyen</h5>
            <nav className="my-2 my-md-0 mr-md-3">
                <a className="p-2 text-dark" href="#">Projects</a>
                <a className="p-2 text-dark" href="#">About</a>
                <a className="p-2 text-dark" href="#">Contact</a>
            </nav>
            
        </div>
    )
}

export default Header
