import Benefits from "./components/Benefits"
import Hero from "./components/Hero"
import Highlight1 from "./components/Highlight"
import Highlight2 from "./components/Highlight2"
import Navbar from "./components/Navbar"
import Testimonials from "./components/Testimonials"
import Trusted from "./components/Trusted"
import WatchVideo from "./components/WatchVideo"
import Faq from "./components/Faq"

import Cta from "./components/cta"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <Trusted />
      <Benefits />
      <Highlight1 />
      <Highlight2 />
      <WatchVideo />
      <Testimonials />
      <Faq />
      <Cta />
      <Footer />
    </div>
  )
}

export default App
