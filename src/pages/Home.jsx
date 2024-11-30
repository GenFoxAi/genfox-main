import About from "../components/About"
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
    </div>
  )
}