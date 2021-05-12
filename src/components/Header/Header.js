import React from 'react'
import './Header.css'

function Header(props) {
    return (
      <div className="header">
        <h1>
          {" "}
          <i className="fas fa-jedi"></i>
          FEW 2.3 Final by: {props.name}
          <i className="fab fa-galactic-senate"></i>
        </h1>
      </div>
    );
}

export default Header