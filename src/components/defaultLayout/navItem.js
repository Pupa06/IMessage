import { useState } from 'react'
import { Link } from 'react-router-dom'

function NavItem({ item, currentPath }) {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleExpand = () => {
    setIsExpanded(!isExpanded)
  }
  const isActiveParent = currentPath.includes(item.url)

  return (
    <div className="nav-item">
      <Link
        to={
          item.children && item.children.length > 0
            ? item.children[0].url
            : item.url
        }
        className={`nav-left ${isActiveParent ? 'active' : ''}`}
        role="presentation"
        onClick={handleExpand}
      >
        <div className="d-flex align-items-center">
          {item.icon && (
            <img
              className="nav-icon"
              src={`/images/nav-icon/${item.icon}`}
              alt={item.name}
            />
          )}
          {item.name}
        </div>
        <div style={{ visibility: item.children ? 'visible' : 'hidden' }}>
          <img
            className={`nav-dd-icon ${isActiveParent ? 'active' : ''}`}
            src="/images/common/arrow_drop_down.svg"
            alt="arrow_drop_down"
          />
        </div>
      </Link>
      {item.children && item.children.length > 0 && isActiveParent && (
        <div className="nav-list">
          {item.children.map((x) => (
            <div key={x.url} className="nav-item">
              <Link
                to={x.url}
                className={`nav-left-child ${window.location.pathname.includes(x.url) ? 'active' : ''}`}
              >
                <div className="d-flex align-items-center">
                  {x.name}
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default NavItem
