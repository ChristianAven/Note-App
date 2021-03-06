import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { startLoginEmailPassword, startGoogleLogin } from '../../Actions/auth'
import { useForm } from '../../hooks/useForm'

const LoginScreen = () => {

    const dispatch = useDispatch();
    const state = useSelector(({ui}) => ui)

    const initialForm = {
        email: '',
        password: ''
    }

    const [values, handleInputChange] = useForm(initialForm);

    const { email, password } = values;

    const handleLogin = (e) =>{
        e.preventDefault();
        dispatch(startLoginEmailPassword(email, password));
    }; 

    const handleGoogleLogin = () => {
        dispatch( startGoogleLogin())
    }

    return (
        <>
            <h3 className="auth__title">Login</h3>

            <form onSubmit={handleLogin}>
                <input 
                    type="text"
                    placeholder="Email"
                    name="email" 
                    className="auth__input"
                    autoComplete='off'
                    value={email}
                    onChange={handleInputChange} />
                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange} />

                <button
                    disabled={state.loading}
                    className="btn btn-primary btn-block"
                    type="submit"
                    >
                    Login
                </button>
                <div className="auth__social-network">
                    <p>Login with social networks</p>

                    <div
                        onClick={handleGoogleLogin} 
                        className="google-btn">
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                <Link className="link" to='/auth/register'>Create new account</Link>

            </form>
        </>
    )
}

export default LoginScreen
