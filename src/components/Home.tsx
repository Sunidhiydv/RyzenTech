import { Hero } from './Hero'
import { About } from './About'
import { Services } from './Services'
import { Testimonials } from './Testimonials'
import { Footer } from './Footer'
import { ScrollToTop } from './ScrollToTop'
import { Navbar } from './Navbar'

export default function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Services />         
        <Testimonials />
        <Footer />
        <ScrollToTop />
    </div>
  )
}
