import React,{useEffect, useState} from 'react'
// import {getInventory} from '../Api/GetRevenue'
import axios from 'axios'
import { Typography,Space, Table, Avatar,Rate} from 'antd'
import { Link } from 'react-router-dom'

const Bookings = () => {

const [loading, setloading] = useState(false)
const [dataSource, setdataSource] = useState([])

useEffect(()=>{
  setloading(true)
  axios.get('https://dummyjson.com/carts/1') // Replace with your API endpoint
      .then(response => {
        setdataSource(response.data.products);
        setloading(false); // Don't forget to set loading to false when data is fetched
      })
      .catch(error => {
        console.error('Error fetching inventory:', error);
        setloading(false);
      })
  
},[])
  return (
    <Space size={20} direction='vertical'>
      <Typography.Title level={4}>Bookings</Typography.Title>
      <Table columns={[
      {
        title: "Title",
        dataIndex: "title"
      },
      {
        title: "Price",
        dataIndex: "price",
        render: (value) => <span>${value}</span>
      },
      {
        title: "Discountend Price",
        dataIndex: "discountedPrice",
        render: (value) => <span>${value}</span>
      },
      {
        title: "Quantity",
        dataIndex: "quantity"
      },
      {
          title:"Total",
          dataIndex:"total"
      },
      ]}
      dataSource={dataSource}
      loading={loading}
      pagination={{
        pageSize: 4
      }}
      ></Table>
    </Space>
  )
}

export default Bookings