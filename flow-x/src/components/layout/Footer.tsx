import { AbstractIcon1 } from "../../../public/icons/Icons";
import CardIcon from "../ui/CardIcon";
import ListItem from "../ui/ListItem";


export default function Footer() {
  return (
   <>
  
   <div className="w-full  flex flex-col justify-center items-center gap-[0.5rem]  p-[8rem 0rem ] pb-10">
     <div className="w-[76.75rem] flex justify-between   ">
     <CardIcon title="Your Webflow partner" icon={<AbstractIcon1/>} content="Integer posuere erat a ante venenatis dapibus posuere velit aliquet." socialLinks/>
     <div className="w-[48.25rem] gap-10 grid grid-cols-2 justify-between ">
        <ListItem label="About us" list={['Team',"Mission"]}/>
        <ListItem label="Work" list={['Cases',"Dribbble"]}/>
        <ListItem label="Work with us" list={['RFP firm',"Mail us"]}/>
        <ListItem label="Legal stuff" list={['Legal notice',"Privacy policy"]}/>
     </div>

     </div>
    
   </div>
   </>
  )
}
