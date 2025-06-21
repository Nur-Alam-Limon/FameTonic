import Image from "next/image";

const Button = () => (
  <button className="h-[40px] py-2 rounded-[10px] gap-[10px] flex items-center justify-center mt-[32px] md:mt-[30px] bg-[#FC004E] shadow-[2px_2px_10px_0px_#00E7F9] font-bold text-[20px] leading-[100%] tracking-normal align-middle">
    GET STARTED{" "}
    <Image src="/rightArrow.svg" alt="Right Arrow" width={11} height={6} />
  </button>
);

export default Button;
