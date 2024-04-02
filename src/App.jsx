import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Notification from './components/Notification'
import Sidebar from './components/Sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [bar,setBar] = useState(false);
  return (
    <main>
      <Notification/>
      <Sidebar/>
    </main>
  )
}

export default App
