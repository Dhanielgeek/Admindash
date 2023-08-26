import React,{useEffect, useState} from 'react'
// import {getInventory} from '../Api/GetRevenue'
import axios from 'axios'
import { Typography,Space, Table, Avatar,Rate} from 'antd'
import { Link } from 'react-router-dom'

const Inventory = () => {

const [loading, setloading] = useState(false)
const [dataSource, setdataSource] = useState([])

useEffect(()=>{
  setloading(true)
  axios.get('https://dummyjson.com/products') // Replace with your API endpoint
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
      <Typography.Title level={4}>Inventory</Typography.Title>
      <Table columns={[
{
  title:"Thumbnail",
  dataIndex:"thumbnail",
  render: (Link) => {
    return(
      <Avatar src={Link} />
    )
  }
},

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
        title: "Rating",
        dataIndex: "rating",
        render: (rating) => {
          return(
            <Rate value={rating}   allowHalf disabled />
          )
        }
      },
      {
        title: "Stock",
        dataIndex: "stock"
      },
      {
          title:"Brand",
          dataIndex:"brand"
      },
      {
        
          title:"Category",
          dataIndex:"category"
        
      }
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

export default Inventory