import React from 'react'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <h1>App</h1>
      <Outlet />
    </>
  )
}

export default App