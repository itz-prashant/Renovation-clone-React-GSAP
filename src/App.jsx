import About from "./components/About"
import HeroBox from "./components/HeroBox"
import Navbar from "./components/Navbar"
import Services from "./components/Services"


const App = () => {
  return (
    <div className="bg-[#202020] overflow-hidden relative">
      <Navbar />
      <HeroBox />
      <About />
      <Services />
    </div>
  )
}

export default App