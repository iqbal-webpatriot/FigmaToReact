import Link from "next/link";
import NextLink from "../ui/NextLink";

export default function Navbar() {
  return (
    <>
      <nav className="flex flex-col items-center content-center justify-around px-[6.6rem] py-2 md:flex-row   gap-[39.28rem]">
        <div className="w-[6.18rem] h-[2.66rem] flex justify-between gap-[0.04rem]">
          {/* <div className="w-[2.46rem] h-[2.46rem] rounded-full bg-[#DBF40C] grid place-items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="22"
              viewBox="0 0 29 22"
              fill="none"
            >
              <path
                d="M6.31742 17.9251C4.24674 17.8423 2.94911 16.4066 3.03194 14.1703C3.08716 12.0168 4.49522 10.6639 6.51069 10.7192C8.55376 10.802 9.85139 12.2653 9.79617 14.4188C9.71335 16.6551 8.3605 18.008 6.31742 17.9251ZM0.271026 14.0599C0.13298 17.5938 2.78346 20.548 6.20699 20.6861C9.65813 20.8241 12.419 18.0356 12.5571 14.5292C12.6399 12.3481 11.6184 10.3879 10.017 9.17306C10.7901 8.31717 11.2871 7.21281 11.3423 5.9704C11.4527 3.2647 9.40965 1.02836 6.842 0.945534C4.21913 0.835097 2.03801 2.98861 1.95518 5.63909C1.89996 6.8815 2.34171 8.06869 3.08716 8.97979C1.45822 10.0565 0.326244 11.934 0.271026 14.0599ZM4.71609 5.74952C4.7437 4.36907 5.48915 3.65123 6.73156 3.70645C7.97397 3.73406 8.63659 4.45189 8.58137 5.85996C8.52615 7.21281 7.80832 7.93064 6.59352 7.90303C5.3235 7.84782 4.66088 7.07476 4.71609 5.74952Z"
                fill="#1D1D1D"
              />
              <path
                d="M11.5244 19.6093L13.5674 21.4315C14.3681 20.548 15.3344 19.4989 16.3836 18.3945C17.3499 19.5541 18.5371 20.3271 20.028 20.4928C22.1539 20.6861 25.3841 19.8854 28.4488 16.4066L26.3505 14.5844C23.9485 17.3454 21.795 17.8699 20.3041 17.7319C19.5034 17.6491 18.8408 17.1797 18.261 16.4343C19.7795 14.8329 21.4084 13.1488 22.9269 11.575L20.9391 9.64241C19.6414 10.9676 18.261 12.4033 16.9358 13.8114C16.5216 12.5966 16.2179 11.2161 16.0799 9.83567L13.319 10.167C13.5398 12.0168 14.0368 14.1151 14.8927 15.9649C13.6227 17.2901 12.4631 18.5602 11.5244 19.6093Z"
                fill="#1D1D1D"
              />
            </svg>
           
          </div>
          <p className="text-[1.76rem]"> flow</p> */}
          <NextLink
            title={<img src="/logo.svg" alt="8x flow logo" />}
            href="/"
          />
        </div>
        <ul className="flex justify-evenly items-center content-center gap-10  ">
          <li className="hover:text-active">
            <NextLink href="/sample-page" title={"Sample Page"} />
          </li>
          <li className="hover:text-active">
            <NextLink href="/style-guide" title={"Style Guide"} />
          </li>
          <li className="hover:text-active">
            <NextLink href="/tutorial" title={"Tutorial"} />
          </li>
        </ul>
      </nav>
    </>
  );
}
