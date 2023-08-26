import React from 'react'
import './Header.css'
import { Avatar, Button, Image, Input, Select } from 'antd'
import Logo from '../../assets/travellogo.png'
import { SearchOutlined } from '@ant-design/icons'

const Header = ({isDarkMode, toggleDarkMode}) => {

const Options = ["Edit Profile","Sign Out","Langauge","Notification","Message"]


  return (
    <div className={`header ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className='contain'>
      <Image src={Logo} width={50}/>
        <div className='search_con'>
  <Input placeholder='Search' size='medium' style={{width:"80%"}}/>
  <Button>
  <SearchOutlined style={{
    color:"#00B4D8"
  }}/>
  </Button>
        </div>
      </div>
        {/* <Select size='large' style={{width:"200px"}}>
         {Options.map((opt,index)=> (
          <Select.Option key={index} value={opt}>
            {opt}
          </Select.Option>
         ) )}
        </Select> */}
  <label class="switch">
  <input type="checkbox" onClick={toggleDarkMode} />
  <span class="slider round"></span>
   </label>
    </div>
  )
}

export default Header