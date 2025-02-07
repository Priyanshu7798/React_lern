import { Outlet } from 'react-router-dom'
import { Header,Footer} from './components/index'
import React from 'react'

function App() {
  return (
    <>
      <Header />
      <Outlet /> 
      <Footer />
    </>
  )
}
// OUtlet only change the component between Header and Footer

export default App
