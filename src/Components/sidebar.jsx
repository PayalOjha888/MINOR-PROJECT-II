import React from 'react'

const Sidebar = ({ setTool, setColor, setSize }) => {
  return (
    <div className="sidebar">
      <h3>Tools</h3>

      <button onClick={() => setTool('pen')}>Pen</button>
      <button onClick={() => setTool('eraser')}>Eraser</button>

      <h3>Color</h3>
      <input type="color" onChange={(e) => setColor(e.target.value)} />

      <h3>Size</h3>
      <select onChange={(e) => setSize(parseInt(e.target.value))}>
        <option value="2">Small</option>
        <option value="5">Medium</option>
        <option value="10">Large</option>
      </select>
    </div>
  )
}

export default Sidebar
