import React from 'react'

export default function LoginScreen({history}) {


    const handleLogin = () => {
        history.push('/');
    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr/>

            <button className="btn btn-dark" onClick={handleLogin}>
                SignIn
            </button>
        </div>
    )
}
