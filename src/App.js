import nasaService from './services/nasa'
import { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import Drawer from './components/Drawer'
import Picture from './components/Picture'
import './index.css'

const App = () => {
  const [picture, setPicture] = useState(null)
  const [drawer, toggleDrawer] = useState(false)

  useEffect(() => {
    nasaService
      .getPictureOfTheDay()
      .then((response) => {
        console.log(response)
        setPicture(response.data)
      })
      .catch((error) => console.log(error))
  }, [])

  const handleClick = () => {
    toggleDrawer(!drawer)
  }

  return (
    <div className='flex bg-silver min-h-screen'>
      <Drawer className='' toggled={drawer} />
      <Sidebar handleClick={handleClick} />
    </div>
  )
}

export default App
