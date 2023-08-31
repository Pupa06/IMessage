import { Checkbox, Input } from 'antd'

const LoginPage = () => {
  const onChange = () => {
    console.log(`checked = ${e.target.checked}`)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    window.location = '/home'
  }
  return (
    <div className="login-page">
      <div className="login-bg">
        <div className="popup-login">
          <div className="left-content">
            <img src="/images/login/left-img.png" alt="left-img" />
          </div>
          <div className="right-content">
            <div className="logo-header">
              <img src="/images/common/logo.svg" alt="logo" />
            </div>
            <div className="form-login">
              <h1>Xin chào!</h1>
              <div className="sub-des">Lorem ipsum dolor sit amet</div>
              <form onSubmit={onSubmit}>
                <div className="input-login-item">
                  <div className="label-input">Username</div>
                  <Input placeholder="Input username" className="form-input" required />
                </div>
                <div className="input-login-item">
                  <div className="label-input">Password</div>
                  <Input type="password" placeholder="Input password" className="form-input" required />
                </div>
                <div className="d-flex justify-content-between">
                  <div>
                    <Checkbox activeColor="#00BA34" onChange={onChange}><div className="remember-me">Remember me</div></Checkbox>
                  </div>
                  <a href="/" className="forget-password">Forgot password?</a>
                </div>
                <button type="submit" className="btn-login">Login</button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
export default LoginPage
