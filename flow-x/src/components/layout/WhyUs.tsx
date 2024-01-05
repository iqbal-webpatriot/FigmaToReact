import { AbstractIcon1, AbstractIcon2, AbstractIcon3, AbstractIcon4, AbstractIcon5, AbstractIcon6 } from "../../../public/icons/Icons";
import CardIcon from "../ui/CardIcon";
const WhyUsData=[
    {
        title:"Euismod Consectetur",
        icon:<AbstractIcon1/>,
        content:"Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
    },
    {
        title:"Euismod Consectetur",
        icon:<AbstractIcon2/>,
        content:"Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
    },
    {
        title:"Euismod Consectetur",
        icon:<AbstractIcon3/>,
        content:"Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
    },
    {
        title:"Euismod Consectetur",
        icon:<AbstractIcon4/>,
        content:"Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
    },
    {
        title:"Euismod Consectetur",
        icon:<AbstractIcon5/>,
        content:"Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
    }
    , {
        title:"Euismod Consectetur",
        icon:<AbstractIcon6/>,
        content:"Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
    }
]
export default function WhyUs() {
  return (
    <>
      <div className="w-full h-[59.6rem] p-[8rem 0rem ] gap-[4rem] flex flex-col justify-center items-center">
        <div className="w-[76.6rem] flex justify-between items-center  ">
          <h2 className="text-[3rem] leading-[3.6rem] text-[#E7E7E7]">Why you should work with us</h2>
          <p className="  text-[1rem] leading-[1.6rem] font-inter text-[#B0B0B0]">Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
        </div>
          <div className="w-[76.6rem] grid grid-cols-3 gap-[4rem] items-center ">
            {WhyUsData.map((card,index)=>{
                return <CardIcon {...card} key={index}/>
            })}
            
          </div>
      </div>
    </>
  );
}
