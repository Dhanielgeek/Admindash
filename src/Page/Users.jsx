import React,{useEffect, useState} from 'react'
// import {getInventory} from '../Api/GetRevenue'
import axios from 'axios'
import { Typography,Space, Table, Avatar} from 'antd'
import { Link } from 'react-router-dom'
import { DeleteFilled } from '@ant-design/icons'

const Users = () => {

const [loading, setloading] = useState(false)
const [dataSource, setdataSource] = useState([])

useEffect(()=>{
  setloading(true)
  axios.get('https://dummyjson.com/users') 
      .then(response => {
        setdataSource(response.data.users);
        setloading(false); // Don't forget to set loading to false when data is fetched
      })
      .catch(error => {
        console.error('Error fetching inventory:', error);
        setloading(false);
      })
  
},[])
  return (
    <Space size={20} direction='vertical'>
      <Typography.Title level={4}>Users</Typography.Title>
      <Table columns={[
        {
            title:"User ID",
            dataIndex:"image",
            render: (Link) => {
              return(
                <Avatar src={Link} />
         )}
        },
      {
        title: "First name",
        dataIndex: "firstName"
      },
      {
        title: "Last Name",
        dataIndex: "lastName",
      },
      {
        title: "Gender",
        dataIndex: "gender",
      },
      {
        title: "Email",
        dataIndex: "email"
      },
      {
        title: "UserName",
        dataIndex: "username"
      },
      {
        title:"Delete",
        render: (text,record) => (
          <DeleteFilled style={{color:'#d5212e'}}  />
        )
          
        
      }
      ]}
      dataSource={dataSource}
      loading={loading}
      pagination={{
        pageSize: 5
      }}
      ></Table>
    </Space>
  )
}

export default Users