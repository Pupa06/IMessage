import { Button } from 'antd'
import React from 'react'

export const TYPE_BUTTON = {
  VERIFY: 'verify',
  CANCEL: 'cancel',
}
export const CommonButton = ({
  type, onClick, leftIcon, title,
}) => (
  <Button className={`btn-common ${type}`} onClick={onClick}>
    <img src={`/images/common/icon-${type}-white.svg`} alt="icon button" />
    {title && <span>{title}</span>}
    <span>{type === TYPE_BUTTON.VERIFY ? 'Duyệt' : 'Từ chối'}</span>
  </Button>
)
