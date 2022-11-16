import {
  FaHome,
  FaBraille,
  FaFileImage,
  FaGripLinesVertical,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Sidebar = ({ handleClick }) => {
  return (
    <div className="fixed z-10 top-0 left-0 h-screen w-24 flex flex-col bg-metal text-metal shadow-lg">
      <SidebarIcon
        onClick={handleClick}
        icon={<FaGripLinesVertical size="28" />}
      />
      <Link to="/dashboard">
        <SidebarIcon icon={<FaBraille size="28" />} />
      </Link>
      <Link to="/images">
        <SidebarIcon
          icon={<FaFileImage size="28" />}
        />
      </Link>
    </div>
  )
}

const SidebarIcon = ({ icon, onClick }) => {
  return (
    <>
      <div onClick={onClick} className="sidebar-icon">
        {icon}
      </div>
    </>
  )
}

export default Sidebar
