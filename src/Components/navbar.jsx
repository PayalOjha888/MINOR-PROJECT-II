import React from 'react';

import jsPDF from 'jspdf'

const handleDownloadImage = () => {
  const canvas = document.querySelector('canvas')
  const image = canvas.toDataURL('image/png')

  const link = document.createElement('a')
  link.href = image
  link.download = 'whiteboard.png'
  link.click()
}

const handleDownloadPDF = () => {
  const canvas = document.querySelector('canvas')
  const imgData = canvas.toDataURL('image/png')
  const pdf = new jsPDF()
  pdf.addImage(imgData, 'PNG', 10, 10, 180, 160)
  pdf.save('whiteboard.pdf')
}


export default function Navbar() {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#282c34', color: 'white' }}>
      <h1>Whiteboard App</h1>
      <button onClick={handleDownloadImage}>Download as Image</button>
      <button onClick={handleDownloadPDF}>Download as PDF</button>
    </nav>
  );
}
