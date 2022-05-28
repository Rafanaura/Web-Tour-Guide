import React from "react";
import {Link} from "react-router-dom"
import {Nav} from "react-bootstrap"

class Navbar extends React.Component{
  Logout= () => {
    localStorage.removeItem("token")
    localStorage.removeItem("customer")
    window.location = "/"
  }
    render(){
        return(
            <Nav className="navbar navbar-expand-lg navbar-light bg-light">
          <h3 className="navbar-brand">Tour Guide</h3>
        
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/home">Home</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/about">About</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/paket">Paket</Link>
      </li>
      {/* <li className="nav-item">
      <Link className="nav-link" to="/transaksi">Transaksi</Link>
      </li> */}
      {/* <li className="nav-item">
      <Link className="nav-link" to="/">Login</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/register">Register</Link>
      </li> */}
    </ul>
    </div>
     
      
  
</Nav>
        )
    }
}
export default Navbar;