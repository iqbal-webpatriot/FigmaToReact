import ServiceCard from "../ui/ServiceCard"


export default function Services() {
  return (
    <>
    <div className=" flex flex-col items-center justify-center w-full h-[34.56rem] p-[8rem 6.75rem] gap-[3rem]">
       <h2 className="font-sora text-[3rem] leading-[3.6rem]">Our services</h2>
        <div className=" w-full grid grid-cols-3 gap-[1.5rem] p-10 ">
          {[1,2,3].map((card,index)=>{
            return (
                <ServiceCard key={index}/>
            )
          })}
        </div>
    </div>
    </>
  )
}
