import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import NotFound from './pages/not-found'
import User from './pages/user'
import UsersPage from './pages/users-page'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={UsersPage} />
        <Route exact path='/repo/:id' component={User} />
        <Route exact path='/not-found' component={NotFound} />
        <Redirect from='*' to={'/not-found'} />
      </Switch>
    </BrowserRouter>
  )
}

export default AppRoutes
