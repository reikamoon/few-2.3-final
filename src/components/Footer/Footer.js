import React from 'react'
import './Footer.css';

function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className ="footer">
        <h4>Anjelica Ambrosio {year}</h4>
        </div>
    )
}

export default Footer