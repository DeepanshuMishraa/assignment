import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Notification from './components/Notification'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <main>
      <Notification/>
      <Sidebar/>
    </main>
  )
}

export default App
