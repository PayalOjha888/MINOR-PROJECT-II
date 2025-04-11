import React, { useRef, useEffect, useState } from 'react'

const Whiteboard = ({ tool, color }) => {
  const canvasRef = useRef(null)
  const [drawing, setDrawing] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = 'red';
    ctx.fillRect(10, 10, 10, 10); // Draws a small red square


    if (!canvas) return;
    if (!ctx) return;

    console.log('Whiteboard mounted');

    // Set canvas size to match parent div
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
    

    const startDrawing = (e) => {
      ctx.beginPath()
      ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
      setDrawing(true)
    }


    const draw = (e) => {
      if (!drawing) return
      ctx.lineWidth = size
      ctx.lineCap = 'round'
      ctx.strokeStyle = tool === 'pen' ? color : 'white'
      ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
      ctx.stroke()
    }

    const stopDrawing = () => {
      ctx.closePath()
      setDrawing(false)
    }

    // canvas.addEventListener('mousedown', startDrawing)
    // canvas.addEventListener('mousemove', draw)
    // canvas.addEventListener('mouseup', stopDrawing)
    // canvas.addEventListener('mouseleave', stopDrawing)

    return () => {
        <canvas
        ref={canvasRef}
        className="drawing-canvas"
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
      />
    }
  }, [tool, color, drawing])

  return <canvas ref={canvasRef} className="drawing-canvas" />
}

export default Whiteboard
