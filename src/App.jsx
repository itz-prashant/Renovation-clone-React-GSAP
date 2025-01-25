import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import HeroBox from "./components/HeroBox"
import Inspire from "./components/Inspire"
import Navbar from "./components/Navbar"
import Project from "./components/Project"
import Review from "./components/Review"
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
      <Review />
      <Project />
      <Inspire />
      <Contact />
      <Footer />
    </div>
  )
}

export default App