import Features from "./Features"
import HeroComponent from "./HeroComponent"
import Benefits from "./Benefits"
import FAQ from "./FAQ"
import Footer from "./Footer"

console.log("Homepage rendered")

function Homepage(){
  return (
    <>
      <HeroComponent />
      <Features />
      <Benefits />
      <FAQ />
      <Footer />
    </>
  )
}

export default Homepage