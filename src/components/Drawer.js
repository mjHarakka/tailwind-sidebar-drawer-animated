const Drawer = ({ toggled }) => {
  console.log(toggled)
  return (
    <div
      className={`absolute h-screen transition-all ease-linear duration-150 bg-metal w-96 px-2 ${
        toggled ? 'opacity-100' : 'opacity-0'
      }`}
    ></div>
  )
}

export default Drawer
