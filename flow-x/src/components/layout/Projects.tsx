import ProjectCard from "../ui/ProjectCard";
const PROJECT_DATA=[{id:1,title:"Automotive UI design",url:'car.jpg'},
{id:2,title:"Speaker UI design",url:'sound.jpg'},
{id:3,title:"Surf brand design",url:'sea.jpg'},
]
export default function Projects() {
  return (
    <>
      <div className="w-full h-[56.25rem] flex flex-col justify-center items-center gap-[3rem] p-[8rem 0rem] ">
        <div className="flex w-[76.5rem]  justify-between  items-center">
          <h2 className="font-sora text-[3rem] leading-[3.6rem] text-[#E7E7E7]">
            Latest projects
          </h2>
          <button className="  w-[12.12rem] h-[4.37rem] font-sora text-[0.9rem] text-[#E7E7E7] p-[1.625rem 2.5rem] rounded-[3.12rem] bg-[#181818]">
            See all projects
          </button>
        </div>
        <div className="w-full flex justify-start gap-[1.5rem] p-10">
          {PROJECT_DATA.map((project)=>{
            return <ProjectCard key={project.id} {...project}/>
          })}
        </div>
      </div>
    </>
  );
}
