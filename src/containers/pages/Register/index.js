import React from 'react';
import "./Register.scss";


const Register = () => {
    return (
        <div>
            <div className="auth-card">
            <p>Halaman Register</p>
            <input className="input" placeholder="Email" type="text"/>
            <input className="input" placeholder="Password" type="password"/>
            <button className="btn">Register</button>
            </div>
            {/* <button>Dashboard</button> */}
        </div>
    )
}

export default Register;
