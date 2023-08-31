import Loadable from 'react-loadable'
import { Redirect } from 'react-router-dom'

function Loading() {
  return <div>Loading...</div>
}

const HomePage = Loadable({
  loader: () => import('../views/homePage'),
  loading: Loading,
})

const SendMailPage = Loadable({
  loader: () => import('../views/SendMail/sendMail'),
  loading: Loading,
})

const routes = [
  {
    path: '/',
    exact: true,
    name: 'Home Page',
    component: HomePage,
  },
  {
    path: '/home',
    exact: true,
    name: 'Home Page',
    component: HomePage,
  },
  {
    path: '/send-bulk-mail',
    exact: true,
    name: 'Send Bulk Mail',
    component: SendMailPage,
  },
]

export default routes
