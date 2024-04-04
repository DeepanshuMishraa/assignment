import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Notification from './components/Notification'
import Sidebar from './components/Sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Appbar from './components/Appbar'
import Content from './components/Content'

function App() {
  const [bar,setBar] = useState(false);
  return (
    <>
    <Notification/> 
    <div className="flex"> {/* Flex container */}
      <Sidebar/>
      <div className="flex flex-col flex-grow"> {/* Flex container for Appbar and Content */}
        <Appbar/>
        <Content/>
      </div>
    </div>
    </>
  )
}

export default App
