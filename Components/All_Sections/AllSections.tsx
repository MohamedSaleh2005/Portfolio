import About from './About'
import HeroSection from './HeroSection'
import Projects from './Projects'
import Services from './Services'

export default function Allsection() {
  return (
    <div className='px-6 md:px-20 '>
      <HeroSection/>
      <About/>
      <Services/>
      <Projects/>
    </div>
  )
}
