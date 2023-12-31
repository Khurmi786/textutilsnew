import React from 'react'
import PropTypes from 'prop-types'
// import   {Link} from "react-router-dom";

export default function Navbar(props) {
  return (
  
  <nav style={{backgroundColor: props.mode==='dark'? 'gray': 'white'}} className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} id="nav">
  <div className="container-fluid">
  <a className="navbar-brand " href="/">{props.name}</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    <li className="nav-item">
      <a className="nav-link active" aria-current="page" to="#">Home</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" to="#">{props.contact}</a>
      
    </li>
   
    <li className="nav-item">
      <a className="nav-link" to="#">About</a>
      
    </li>
   
      
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="true">
        Dropdown
      </a>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="/">Action</a></li>
        <li><a className="dropdown-item" href="/">Another action</a></li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="/">Something else here</a></li>
      </ul>
    </li>
    <li className="nav-item">
      <a className=" btn btn-danger" href="/npm start" >start App
    </a>
    </li>
  </ul>
 
  </div>
  <div className={`form-check form-switch text-${props.mode==='light'? 'dark': 'light'}`}>
  <input className="form-check-input" onClick= {props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
  <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
  
<div className={`form-check form-switch text-${props.mode==='green'? 'blue': 'black'}`}>
  <input className="form-check-input" onClick= {props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
  <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">Enable Green Mode</label>
</div>
  </div>
  </nav>


  )
}
Navbar.propTypes = {
  // You can declare that a prop is a specific JS type. By default, these
  // are all optional.
  name: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired
}
Navbar.defaultProps = {
  name: 'set Namwe of App Here',
  contact:'Set Contact Here'
};