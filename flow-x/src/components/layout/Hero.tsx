export default function Hero() {
  return (
    <>
      <div className="w-full h-[36.82rem] flex flex-col justify-center items-center p-[8rem 0rem] gap-[0.5rem]">
        <p className="text-active font-inter  text-[1rem] ">Webflow Agency</p>
        <h1 className="font-sora text-[5rem]">Your Webflow partner</h1>
        <p className="font-inter text-[1rem] leading-[1.8rem] w-[28.06rem] h-[3.62rem] text-center">
          We design and develop handcrafted websites for amazing companies who
          want to win the digital game.
        </p>
        <button className=" w-[12.91rem] h-[4.32rem] mt-[3rem] rounded-[3.12rem] bg-btn-green text-black font-sora text-[0.9rem] p-[1.35rem 2.55rem]">
          Let’s get in touch
        </button>
      </div>
    </>
  );
}
