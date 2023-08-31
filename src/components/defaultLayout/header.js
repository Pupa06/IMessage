/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable no-unused-vars */
import { useState } from 'react'

const Header = () => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false)
  const handleLogout = () => {
    window.location = '/login'
  }
  return (
    <header>
      <div className="button-header">
        {/* <img src="/images/common/icon-header.svg" alt="icon-header" /> */}
      </div>
      <div className="d-flex align-items-center">
        {/* <div className="email-header">
          <img src="/images/common/mail.svg" alt="mail" />
        </div> */}
        <div
          className="header-avt"
          role="presentation"
          onClick={() => setIsOpenDropdown(true)}
          tabIndex={0}
          onBlur={() => setIsOpenDropdown(false)}
        >
          <img
            className="avt"
            src="/images/common/avatar.svg"
            alt="avatar"
            width={34}
            height={34}
          />
          Admin
          <img
            className="avatar-dd"
            src="/images/common/arrow_drop_down.svg"
            alt="arrow_drop_down"
          />
          <div
            className="account-dd"
            style={{ display: isOpenDropdown ? 'block' : 'none' }}
          >
            <div className="account-dd-item">
              <img src="/images/common/person.svg" alt="user" />
              Tài khoản của tôi
            </div>
            <div className="account-dd-item">
              <img src="/images/common/settings.svg" alt="setting" />
              Cài đặt
            </div>
            <div
              className="account-dd-item account-dd-item-logout"
              role="presentation"
              onClick={handleLogout}
            >
              <img src="/images/common/logout.svg" alt="logout" />
              Đăng xuất
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
