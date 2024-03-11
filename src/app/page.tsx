import Footer from '@/components/landingPageComponents/Footer';
import HamburgerNavbar from '@/components/landingPageComponents/HamburgerNavbar';
import Hero from '@/components/landingPageComponents/Hero';
import JoinUs from '@/components/landingPageComponents/Joinus';
import Navbar from '@/components/landingPageComponents/Navbar';
import Search from '@/components/landingPageComponents/Search';
import ServiceSection from '@/components/landingPageComponents/SerciveSection';
import TextSection from '@/components/landingPageComponents/TextSection/indx';

export default function Home() {
  return (
    <main>
      <div className='grid xl:grid-cols-12 col-span-2 lg:col-span-4'>
        <div className='col-span-full sticky top-0 z-40'>
          <Navbar />
          <HamburgerNavbar />
        </div>
        <div className='col-span-full'>
          <Hero />
        </div>
        <div className='col-span-full'>
          <Search />
        </div>
        <div className='col-span-full'>
          <ServiceSection />
        </div>
        {/* <div className='col-span-full'>
          <HeaderSection/>
        </div> */}
        <div className='col-span-full mt-16'>
          <TextSection size='desktop'/> 
          <TextSection size='mobile'/> 
        </div>
        <div className='col-span-full'>
          <JoinUs/>
        </div>
        <div className='col-span-full'>
          <Footer />
        </div>
      </div>
    </main>
  );
}