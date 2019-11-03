import React from 'react'
import {ThemeProvider} from 'styled-components'
import {Normalize} from 'styled-normalize'

import {Header} from 'components/Header'
import {Home} from 'pages/Home'

import {GlobalStyle, theme} from './styles'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from 'react-router-dom'
import {MyProfile} from './pages/MyProfile'

export const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <Normalize/>
      <GlobalStyle/>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/my-profile">
          <MyProfile/>
        </Route>
      </Switch>
    </ThemeProvider>
  </Router>
)
