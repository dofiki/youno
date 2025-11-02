import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection/index'
import ServiceSection from '../components/ServiceSection'
import FooterSection from '../components/FooterSection'
import { useEffect } from 'react'
function HomePage() {

  
     useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
  return (
    <div>
      <NavBar />
      <HeroSection />
      <ServiceSection />
      <FooterSection />
    </div>
  )
}

export default HomePage
