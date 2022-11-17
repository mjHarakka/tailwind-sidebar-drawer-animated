const Drawer = ({ toggled }) => {
  console.log(toggled)
  return (
    <div
      className={`absolute h-screen left-24 transform duration-300 bg-metal w-96 px-2 ${
        toggled ? '' : '-left-96 w-0'
      }`}
    >
    </div>
  )
}

export default Drawer
