import Header from './components/Header'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Gallery from './components/Gallery'
import FloorPlans from './components/FloorPlans'
import Pricing from './components/Pricing'
import WhyChoose from './components/WhyChoose'
import Faq from './components/Faq'
import RegisterCta from './components/RegisterCta'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Highlights />
        <Gallery />
        <FloorPlans />
        <Pricing />
        <WhyChoose />
        <Faq />
        <RegisterCta />
      </main>
      <Footer />
    </>
  )
}

export default App
