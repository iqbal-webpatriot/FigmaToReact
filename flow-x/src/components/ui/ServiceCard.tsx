export default function ServiceCard() {
  return (
    <>
      <div className="w-[24.5rem] flex flex-col items-start p-8 gap-8 rounded-lg border-2 border-solid border-[#4A4A4A] border-opacity-50">
        <h4 className="font-sora text-[#E7E7E7] text-[1.93rem] leading-[2.32rem]">Discover</h4>
        <div className="relative">
          <p className="font-inter text-muted1 self-stretch text-[1rem] leading-[1.8rem] relative  ">
            Lorem ipsum dolor sit amet, consectetur adipiscing eros elementum
            tristique.
          </p>
          <div className="absolute bottom-0 right-0 inset-y-10 mb-1 mr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
            >
              <g clipPath="url(#clip0_1_68)">
                <path
                  d="M10.6249 9.20834L23.0817 21.6651L23.0817 14.1667C23.0793 14.0337 23.1035 13.9016 23.1528 13.778C23.2021 13.6545 23.2755 13.542 23.3688 13.4471C23.462 13.3522 23.5732 13.2769 23.6959 13.2255C23.8185 13.174 23.9502 13.1475 24.0832 13.1475C24.2163 13.1475 24.3479 13.174 24.4706 13.2255C24.5933 13.2769 24.7045 13.3522 24.7977 13.4471C24.8909 13.542 24.9643 13.6545 25.0136 13.778C25.0629 13.9016 25.0871 14.0337 25.0848 14.1667L25.0848 24.0834C25.0848 24.349 24.9792 24.6037 24.7914 24.7915C24.6036 24.9794 24.3489 25.0849 24.0832 25.0849L14.1666 25.0849C13.9039 25.0804 13.6536 24.9728 13.4695 24.7855C13.2854 24.5982 13.1822 24.346 13.1822 24.0834C13.1822 23.8207 13.2854 23.5685 13.4695 23.3812C13.6536 23.1939 13.9039 23.0863 14.1666 23.0818L21.665 23.0818L9.20822 10.625C9.02036 10.4371 8.91482 10.1823 8.91482 9.91667C8.91482 9.65099 9.02036 9.3962 9.20822 9.20834C9.39609 9.02048 9.65088 8.91494 9.91656 8.91494C10.1822 8.91494 10.437 9.02048 10.6249 9.20834Z"
                  fill="#DBF40C"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_68">
                  <rect
                    width="24.0417"
                    height="24.0417"
                    fill="white"
                    transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 34 17)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
