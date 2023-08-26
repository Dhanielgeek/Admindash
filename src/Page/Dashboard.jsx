import { DollarOutlined, ShopFilled, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'
import { Card, Space, Statistic, Table, Typography } from 'antd'
import React,{useEffect, useState} from 'react'
// import { GetOrders } from '../Api/getOrders'
import axios from 'axios'
import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend} from 'chart.js'
import {Bar} from 'react-chartjs-2'
// import { GetRevenue } from '../Api/GetRevenue'


ChartJS.register(
  CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend
)

const Dashboard = () => {

  const [inventory, setinventory] = useState(0)
  const [bookings, setbookings] = useState(0)
  const [users, setusers] = useState(0)
  const [revenue, setrevenue] = useState(0)


  useEffect(() => {
    axios.get('https://dummyjson.com/carts/1') // Replace with your API endpoint
      .then(response => {
       setbookings(response.data.total)
       setrevenue(response.data.discountedTotal)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
      axios.get('https://dummyjson.com/products')
      .then(response => {
        setinventory(response.data.total)
      })
      .catch(error => {
        console.log("Error fetching data", error)
      });
      axios.get('https://dummyjson.com/products')
      .then(response => {
        setusers(response.data.total)
      })
      .catch(error => {
        console.log("Error fetching data", error)
      });
     
  }, [])


  return (
   <Space direction='vertical'>
     <Typography.Title level={4}  > Dashboard </Typography.Title>
    <Space direction='horizontal'>
      <DashCard 
      title={'Bookings'} 
      value={bookings} 
      icon={<ShoppingCartOutlined 
      style={{
        color:"green",
        background:"#98FB98",
        borderRadius:50,
        padding:8,
        fontSize:20}}/>}/>
      <DashCard 
      title={'Inventory'} 
      value={inventory} 
      icon={<ShopFilled 
      style={{
        color:"purple",
        background: "#FFA280",
        borderRadius: 50,
        padding: 8,
        fontSize: 20
      }}/>
      }/>
      <DashCard 
      title={'Users'} 
      value={users} 
      icon={<UserOutlined style={{
        color:"pink",
        background: "#E0FFFF",
        borderRadius:50,
        padding:8,
        fontSize: 20
      }}/>}/>
      <DashCard 
      title={'Revenue'} 
      value={revenue} 
      icon={<DollarOutlined style={{
        color:"red",
        background: "#FF9997",
        borderRadius:50,
        padding:8,
        fontSize: 20
      }}/>}/>
    </Space>
   
   <Space>
   <RecentOrders/>
   <DashChart/>
   </Space>

  </Space>
  )
}

const DashCard = ({title,value,icon})=>{
  return(
    <Card>
      <Space direction='horizontal'>
        {icon}
        <Statistic value={value} title={title}></Statistic>
      </Space>
    </Card>
  )
}


const RecentOrders = ()=>{


  const [Loading, setLoading] = useState(true)
  const [dataSource, setdataSource] = useState([])
  
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://dummyjson.com/carts/1')
        setLoading(false);
        setdataSource(response.data.products.splice(0,3));
       
      } catch (error) {
        console.error('Error fetching orders:', error);
        setLoading(false);
      }
    };

    fetchOrders();
  }, [])
  


return(
  <>
<Typography.Text>Recent Orders</Typography.Text>
<Table columns={[
    {
    title: "Title",
    dataIndex: "title",
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
  },
{
  title: "Price",
  dataIndex: "price",
},
]}
Loading={Loading}
dataSource={dataSource}
pagination={false}
></Table>
</>
)
}

const DashChart = ()=>{

const [revenue, setrevenue] = useState({
  labels : [],
  datasets : []
})

  useEffect(()=>{
    axios.get('https://dummyjson.com/carts')
    .then(response => {
      const labels = response.data.carts.map(cart => {
        return `User ${cart.userId}`;
      });
      const data = response.data.carts.map(cart => {
        // Calculate discountedTotal directly here
        const discountedTotal = Math.random() * 1000;
        return discountedTotal;
      })
      const SourceData = {
        labels,
    datasets: [
      {
        label: 'Revenue',
        data: data,
        backgroundColor: 'orangered',
      },
    ],
      }
      setrevenue(SourceData)
    })

  
  },[])

 const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Order Revenue',
      },
    },
  };

  return(
    <Card style={{ width : 500, height: 250}}>
    <Bar options={options} data={revenue} />
  </Card>
   
  )
}

export default Dashboard;



