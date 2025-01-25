import HeroBox from "./components/HeroBox"
import Navbar from "./components/Navbar"


const App = () => {
  return (
    <div className="bg-[#202020] overflow-hidden relative">
      <Navbar />
      <HeroBox />
    </div>
  )
}

export default App