import Hero from "@/components/layout/Hero";
import Projects from "@/components/layout/Projects";
import Services from "@/components/layout/Services";

export default function Home() {
  return (
   <>
   <div className='w-full h-screen'>
    <Hero/>
    <Services/>
    <Projects/>
   </div>
   </>
  )
}
