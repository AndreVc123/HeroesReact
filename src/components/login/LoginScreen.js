import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

export default function LoginScreen({history}) {

    const {dispatch} = useContext(AuthContext)


    const handleLogin = () => {
        // history.push('/');

        const lastPath = localStorage.getItem('lastPath') || '/';
        dispatch({
            type: types.login,
            payload: {
                name: 'Andre Vergara',
                logged: true
            }
        })

        history.replace(lastPath);
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
