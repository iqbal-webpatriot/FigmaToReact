import About from "@/components/layout/About";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/Hero";
import Projects from "@/components/layout/Projects";
import Services from "@/components/layout/Services";
import WhyUs from "@/components/layout/WhyUs";

export default function Home() {
  return (
   <>
   <div className='w-full h-screen'>
    <Hero/>
    <Services/>
    <Projects/>
    <About/>
    <WhyUs/>
    <Footer/>
   </div>
   </>
  )
}
