import About from "../components/About"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Integration from "../components/Integration"
import { TimelineDemo } from "../components/TimelineDemo"

export const Home = () => {
  return (
    <div className="">
      <Hero />
      <About />
      <Integration />
      <TimelineDemo />
      <Footer />
    </div>
  )
}