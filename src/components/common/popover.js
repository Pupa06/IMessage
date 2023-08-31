import React, { useState } from 'react'

const Popover = ({ content, children }) => {
  const [visible, setVisible] = useState(false)

  const showPopover = () => {
    setVisible(true)
  }

  const hidePopover = () => {
    setVisible(false)
  }

  return (
    <div style={{ position: 'relative' }}>
      <div onMouseEnter={showPopover} onMouseLeave={hidePopover}>
        {children}
      </div>
      {visible && (
        <div
          className="tooltip-info"
        >
          <div className="tooltip-content">
            {content}
          </div>
          <div className="arrow" />
        </div>
      )}
    </div>
  )
}

export default Popover
