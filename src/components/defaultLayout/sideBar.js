import { Link } from 'react-router-dom'
import navs from '../../constants/navs'
import NavItem from './navItem'

const SideBar = () => {
  const currentPath = window.location.pathname
  return (
    <div className="side-bar">
      <Link to="/" className="logo">
        <div className="logo-content">
          <img src="/images/common/IMessage_logo.png" alt="logo" />
          <h5>Message Mail</h5>
        </div>
      </Link>
      <div className="nav-list">
        {
          navs.map((item) => (
            <NavItem key={item.name} item={item} currentPath={currentPath} />
          ))
        }
      </div>
    </div>
  )
}

export default SideBar
