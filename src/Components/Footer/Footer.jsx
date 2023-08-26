import React from 'react'
import './Footer.css'
import { Typography } from 'antd'

const Footer = () => {
  return (
    <div className='footer'>
      <Typography.Text style={{color:"#00B4D8",fontSize:"20px"}}>&copy; Trippy 2023</Typography.Text>
    </div>
  )
}

export default Footer