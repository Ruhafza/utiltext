import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export default function Navbar(props) {

  return (
    <>
    <div><nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a Link="navbar-brand" to="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.aboutUS}</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Contacts</a>
          </li>
        </ul>
      </div>
    </div>
  </nav></div>
  
  </>
  )
}

Navbar.propTypes={ 
    title:PropTypes.string.isRequired,
    aboutUS:PropTypes.string.isRequired
}
Navbar.defaultProps={
    title:"Enter the title",
    aboutUS:"Enter the about us"
}