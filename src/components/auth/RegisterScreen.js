import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import validator from 'validator';
import { startRegisterWithNameEmailPassword } from '../../Actions/auth';
import { removeError, setError } from '../../Actions/ui';
import { useForm } from '../../hooks/useForm';

const RegisterScreen = () => {

    const dispatch = useDispatch();
    //const state = useSelector( ({ui}) => ui)

    const [ value, handleInputChange ] = useForm( {name:'', email:'', password:'', passwordConfirm:''} )

    const {name, email, password, passwordConfirm} = value;

    const handleRegister = (e) => {
        e.preventDefault()
        
        if (isFormValid()) {
            dispatch( startRegisterWithNameEmailPassword(email, password, name))
        }
 
    }

    const isFormValid = () => {
        if (name.trim().length < 3) {
            dispatch(setError('Name is Requeried :V'))
            Swal.fire('Error', 'The name is invalid', 'warning')
            return false
        } else if( !validator.isEmail(email) ) {
            dispatch(setError('Email is incorred :('))
            Swal.fire('Error', 'The email is invalid', 'warning')
            return false
        } else if( password !== passwordConfirm || password.length < 5){
            dispatch(setError('Error in password :('))
            Swal.fire('Error', 'The password is invalid', 'warning')
            return false
        }
        dispatch(removeError())
        return true;
    }

    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form onSubmit={handleRegister}>
            
                {/* { state.msgError &&
                    <div className="auth__alert-error">
                        {state.msgError}
                    </div>
                }  */}

                <input
                    onChange={handleInputChange} 
                    type="text"
                    placeholder="Name"
                    name="name" 
                    className="auth__input"
                    autoComplete='off'
                    value={name} />
                <input 
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Email"
                    name="email" 
                    className="auth__input"
                    autoComplete='off'
                    value={email} />
                <input 
                    onChange={handleInputChange}
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={password} />
                <input 
                    onChange={handleInputChange}
                    type="password"
                    placeholder="Confirm password"
                    name="passwordConfirm"
                    className="auth__input"
                    value={passwordConfirm} />

                <button
                    className="btn btn-primary btn-block mb-5"
                    type="submit"
                    >
                    Registes
                </button>
                
                <Link className="link" to='/auth/login'>Already registed?</Link>

            </form>
        </>
    )
}

export default RegisterScreen
