import { Menu } from 'antd'
import React from 'react'
import './Sidebar.css'
import { AppstoreOutlined, ShoppingCartOutlined, UserOutlined, ShopFilled } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'


const Sidebar = () => {

  const navigate = useNavigate()



  return (
    <div className='sidebar'>
      <Menu onClick={(item)=>{
        navigate(item.key)
      }} items={[
        {
          label: "DashBoard",
          key: '/',
          icon: <AppstoreOutlined />
        },
        {
          label: "Inventory",
          key: '/inventory',
          icon: <ShopFilled />
        },
        {
          label: "Bookings",
          key: '/bookings',
          icon: <ShoppingCartOutlined />
        },
        {
          label: "Users",
          key: '/users',
          icon: <UserOutlined />
        }
      ]}></Menu>
    </div>
  )
}

export default Sidebar