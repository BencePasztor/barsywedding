import Hero from "@/components/sections/hero/Hero"
import Services from "@/components/sections/services/Services"
import About from "@/components/sections/about/About"
import Portfolio from "@/components/sections/portfolio/Portfolio"
import Contact from "@/components/sections/contact/Contact"

const HomeView = () => {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Contact />
    </>
  )
}

export default HomeView