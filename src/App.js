import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Drawer from './components/Drawer'
import { Routes, Route, Link } from 'react-router-dom'
import './index.css'

const App = () => {
  const [drawer, toggleDrawer] = useState(false)

  const handleClick = () => {
    toggleDrawer(!drawer)
  }

  return (
    <div className="flex bg-silver min-h-screen">
      <Routes>
        <Route
          path="/"
          element={<Layout handleClick={handleClick} drawer={drawer} />}
        >
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  )
}

const Layout = ({ drawer, handleClick }) => {
  return (
    <div className="bg-silver min-h-screen">
      <div className="">
        <Sidebar handleClick={handleClick} />
        <Drawer className="" toggled={drawer} />
      </div>
    </div>
  )
}

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
    </div>
  )
}

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  )
}

const NoMatch = () => {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  )
}

export default App
