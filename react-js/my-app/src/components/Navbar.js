import React from 'react'
// import PropTypes from 'prop-types'


export default function Navbar(props) {
    console.log("Navbar Props: ", props);
    return (
        <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>     {/* using js and template literals */}
            <div className="container" >
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">{props.aboutPage}</a>
                        </li>
                    </ul>
                    <div className="mode">
                        <div className="form-check form-switch">      {/* using template literals and terneray operator for mode */}
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`}htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                        </div>
                    </div>
                    <form className="d-flex mx-2" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-primary" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

// Navbar.propTypes = {
//     title: PropTypes.string,
//     aboutPage: PropTypes.string
// }
// Navbar.defaultProps = {
//     title: 'Title',
//     aboutPage: 'About'
// }
