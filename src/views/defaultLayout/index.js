import {
  Table, DatePicker, InputNumber, Drawer, message,
} from 'antd'
import { Route, Switch } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { CloseCircleFilled } from '@ant-design/icons'
import Header from '../../components/defaultLayout/header'
import SideBar from '../../components/defaultLayout/sideBar'
import { signInApi } from '../../apis/authenticationApis'
import Axios from '../../services/Axios'
import routes from '../../constants/routes'

Table.defaultProps = {
  locale: {
    emptyText: 'Không có dữ liệu',
  },
}
DatePicker.defaultProps = {
  placeholder: '',
  style: { width: '100%' },
}
InputNumber.defaultProps = {
  style: { width: '100%' },
}

Drawer.defaultProps = {
  closeIcon: <CloseCircleFilled style={{ fontSize: '24px' }} />,
}

message.config({
  maxCount: 1,
})

const DefaultLayout = () => {
  const [isSignedIn, setIsSignedIn] = useState(false)

  async function signIn() {
    const res = await signInApi('admin_dev@gmail.com', 'passWord123')
    const accessToken = res.data.data.access_token
    Axios.getInstance().setToken(accessToken)
    setIsSignedIn(true)
  }

  useEffect(() => {
    signIn().then()
  }, [])

  return (
    <div className="layout">
      <SideBar />
      <div className="right-panel">
        <Header />
        {isSignedIn && (
          <div className="main">
            <Switch>
              {routes.map((route, idx) => route.component ? (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={(props) => <route.component {...props} />}
                />
              ) : null)}
            </Switch>
          </div>
        )}
      </div>
    </div>
  )
}
export default DefaultLayout
