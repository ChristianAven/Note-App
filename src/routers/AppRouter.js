import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect} from "react-router-dom";
import JournalScreen from '../components/journal/JournalScreen';
import AuthRouter from './AuthRouter';

const AppRouter = () => {
    console.log('entro en el primero switch')
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/auth" component={AuthRouter} />
            <Route path="/" component={JournalScreen} />
            <Redirect to='/auth/login' />
          </Switch>
        </div>
      </Router>
    )
}

export default AppRouter
