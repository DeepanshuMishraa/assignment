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
    <main>
      <Notification/>
      <Sidebar/>
      <Appbar/>
      <Content/>

    </main>
  )
}

export default App
