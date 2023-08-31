import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'antd/dist/reset.css'
import DefaultLayout from './views/defaultLayout'
import LoginPage from './views/LoginPage'
import './styles/index.scss'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" name="Login" component={LoginPage} />
        <Route path="/" name="Default Layout" component={DefaultLayout} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
