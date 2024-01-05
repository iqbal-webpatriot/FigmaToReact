
type ProjectCardProps={
  id:number;
  title:string;
  url:string
}
export default function ProjectCard({id,title,url}:ProjectCardProps) {
  return (
    <>
      <div key={id} className="w-[24.5rem] flex flex-col gap-[1.5rem] justify-start rounded-[0rem 1rem 0rem 1rem ] ">
        <img 
          src={`/images/${url}`}
          className="w-full h-[29.75rem] rounded-2xl"
          alt="project card"
        />
        <p className="text-[1.25rem] leading-[1.62rem] font-sora text-[#E7E7E7]">
         {title}
        </p>
      </div>
    </>
  );
}
