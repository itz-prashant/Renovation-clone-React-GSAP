import About from "./components/About"
import HeroBox from "./components/HeroBox"
import Navbar from "./components/Navbar"
import Services from "./components/Services"
import Task from "./components/Task"


const App = () => {
  return (
    <div className="bg-[#202020] overflow-hidden relative">
      <Navbar />
      <HeroBox />
      <About />
      <Services />
      <Task />
    </div>
  )
}

export default App