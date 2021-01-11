import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect} from "react-router-dom";
import { firebase } from '../firebase/firebase-config';
import JournalScreen from '../components/journal/JournalScreen';
import AuthRouter from './AuthRouter';
import { useDispatch } from 'react-redux';
import { login } from '../Actions/auth';
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';
import { starLoadingNotes } from '../Actions/notes';

const AppRouter = () => {

  const dispatch = useDispatch()

  //const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    
    firebase.auth().onAuthStateChanged( (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        dispatch(starLoadingNotes(user.uid))
        setIsLoggedIn(true)
      }else {
        setIsLoggedIn(false)
      }

      //setChecking(false)

    } )
    
  }, [dispatch,setIsLoggedIn])

  // if (checking) {
  //   return (
  //     <h1>Cargando...</h1>
  //   )
  // }

  return (
      <Router>
        <div>
          <Switch>
            <PublicRouter isLoggedIn={isLoggedIn} path="/auth" component={AuthRouter} />
            <PrivateRouter isLoggedIn={isLoggedIn} path="/" component={JournalScreen} />
            <Redirect to='/auth/login' />
          </Switch>
        </div>
      </Router>
    )
}

export default AppRouter
