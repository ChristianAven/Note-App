import { types } from "../types/types"
import {firebase, googleAuthProvider} from '../firebase/firebase-config'
import { uiFinishLoading, uiStartLoading } from "./ui"
import Swal from 'sweetalert2';
import sad from "../sad.svg";
import { noteLogout } from "./notes";
export const startLoginEmailPassword = (email, password) =>{
    return (dispatch) => {
        dispatch(uiStartLoading())
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then( ({user}) =>{
                dispatch(login(user.uid, user.displayName))
                dispatch(uiFinishLoading())
                Swal.fire({
                    title: 'Your count is ready',
                    timer: 1500,
                    icon: 'success',
                })            
            }).catch(e =>{
                dispatch(uiFinishLoading());
                Swal.fire('Error', e.message, 'error')
            })
    }
}

export const startRegisterWithNameEmailPassword = (email, password, name) =>{
    return (dispatch) =>{
        firebase.auth().createUserWithEmailAndPassword( email, password )
            .then(async({user}) => {
                await user.updateProfile({displayName: name})
                dispatch( login(user.uid, user.displayName) )
            } );
    }
}

export const startGoogleLogin = () => {
    return ( dispatch ) => {
        firebase.auth().signInWithPopup( googleAuthProvider )
            .then( ({user}) => {
                dispatch( login(user.uid, user.displayName) )
            } ).catch(e=> {console.log(e)})
    }
}

export const login = (uid, displayName) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
};


export const startLogout = () => {
    return async(dispatch) => {
        await firebase.auth().signOut();
        Swal.fire({
            title: 'Goodbye',
            timer: 1500,
            imageUrl: sad,
            imageWidth: 100,
            imageHeight: 100,
        })
        dispatch(logout());
        dispatch( noteLogout() )
    }
}

export const logout = () => ({
    type: types.logout
})



