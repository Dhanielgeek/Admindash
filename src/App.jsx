import React,{useState} from 'react'
import { Space } from 'antd'
import './App.css'
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'
import Pagecontent from './Components/PageContent/Pagecontent'
import Footer from './Components/Footer/Footer'

const App = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Space className='between'>
        <Sidebar/><Pagecontent  />
      </Space>
      <Footer/>
    </div>
  )
}

export default App