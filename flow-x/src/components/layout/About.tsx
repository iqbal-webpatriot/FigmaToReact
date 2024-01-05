export default function About() {
  return (
    <>
      <div className="w-full flex justify-center  items-center p-[8rem 0rem] gap-[6.06rem]">
        <img
          className="w-[35.18rem] h-[23.46rem] rounded-2xl"
          src="/images/workspace.jpg"
          alt="work space"
        />
        <div className="w-[35.25rem] h-[22.18rem] flex flex-col justify-start gap-5">
          <h2 className="text-[3rem] leading-[3.6rem] text-[#E7E7E7]">Your team of specialists</h2>
          <p className="font-inter text-[1rem] leading-[1.6rem] text-[#B0B0B0]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
          <button className="w-[11.62rem] h-[4.37rem] rounded-[3.12rem] text-[0.9rem] text-[#E7E7E7] bg-[#181818]">
          More about us
          </button>
        </div>
      </div>
    </>
  );
}
