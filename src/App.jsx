import React, { useState } from 'react'
import './App.css'
import Navbar from '/src/Components/navbar'
import Sidebar from '/src/Components/sidebar'
import Whiteboard from '/src/Components/whiteboard' // ✅ Ensure this import

function App() {
  const [tool, setTool] = useState('pen')
  const [color, setColor] = useState('#000000')
  const [size, setSize] = useState(3)


  return (
    <>
      <div className="app-container">
        <Navbar />
        <div className="main-content">
        <Sidebar setTool={setTool} setColor={setColor} setSize={setSize} />
          <div className="whiteboard">
          <Whiteboard tool={tool} color={color} size={size} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
