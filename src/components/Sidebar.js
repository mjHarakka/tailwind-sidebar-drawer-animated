import { FaFire, FaFileImage, FaGripLinesVertical } from 'react-icons/fa'

const Sidebar = ({handleClick}) => {
  return (
    <div className='fixed top-0 left-0 h-screen w-24 flex flex-col bg-metal text-metal shadow-lg'>
      <SidebarIcon onClick={handleClick} icon={<FaGripLinesVertical size='28' />} text='home' />
      <SidebarIcon onClick={handleClick} icon={<FaFileImage size='28' />} text='Picture Of The Day' />
    </div>
  )
}

const SidebarIcon = ({ icon, text, onClick }) => {
  return (
    <>
      <div onClick={onClick} className='sidebar-icon'>{icon}</div>
    </>
  )
}

export default Sidebar
