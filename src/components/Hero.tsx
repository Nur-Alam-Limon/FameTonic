import Button from "./Button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="container mx-auto relative flex flex-col-reverse md:flex-row items-center justify-between">
      <div className="text-center md:text-left pt-0 md:pt-[57px] pb-[82px] w-fulll md:w-[516px]">
        <h1 className="font-heading font-extrabold md:font-bold text-[25px] md:text-[35px] px-[27px] md:px-0 leading-[100%] tracking-normal align-middle text-white">
          Want to Turn Social Media Into a Profitable Career?
        </h1>
        <p
          className="font-heading mt-1 md:mt-[10px] font-extrabold md:font-bold text-[25px] md:text-[35px] px-[25px] md:px-0 leading-[100%] tracking-normal align-middle"
          style={{
            color: "#00E7F9",
            textShadow: "0px 4px 4px #FC004E",
          }}
        >
          Discover your way to success with Fametonic:
        </p>

        <ul className="text-left flex flex-col gap-y-[10px] md:gap-y-[13px] mt-[22px] md:mt-[16px] font-medium md:font-semibold text-base leading-[22px] tracking-normal align-middle text-[16px]">
          <li className="flex items-center gap-[10px]">
            <Image src="/star.png" alt="Star Icon" width={22} height={22} />
            <span>
              Start growing your influence right away — no waiting required!
            </span>
          </li>
          <li className="flex items-center gap-[10px]">
            <Image src="/star.png" alt="Star Icon" width={22} height={22} />
            <span>
              Create viral TikToks and Reels step by step with easy-to-follow
              lessons
            </span>
          </li>
          <li className="flex items-center gap-[10px]">
            <Image src="/star.png" alt="Star Icon" width={22} height={22} />
            <span>Use a Personal AI Worker to boost your content</span>
          </li>
          <li className="flex items-center gap-[10px]">
            <Image src="/star.png" alt="Star Icon" width={22} height={22} />
            <span>
              Learn from expert-led courses designed for aspiring influencers
            </span>
          </li>
        </ul>

        <div className="flex flex-col-reverse md:flex-col">
          <div className="flex flex-col w-full md:w-[313px]">
            <Button />
            <p className="font-normal text-[12px] mt-[10px] leading-[16px] tracking-normal text-center align-middle">
              1-minute quiz for personalized insights
            </p>
          </div>
          <div className="px-[34px] md:px-0">
            <p className="mt-[22px] md:mt-[30px] font-medium text-[#ABABAB] text-[12px] leading-[16px] tracking-normal align-middle">
              By clicking "Get Started", you agree with Terms and Conditions,
              Privacy Policy, Subscription Terms
            </p>
            <p className="mt-[19px] md:mt-[12px] font-medium text-[#ABABAB] text-[10px] leading-[12px] tracking-normal align-middle">
              Fametonic 2025 ©All Rights Reserved.
            </p>
          </div>
        </div>
      </div>

      <div className="relative mt-4 md:mt-0">
        <Image
          src="/mockup-phone.png"
          alt="Mobile mockup"
          width={666}
          height={679}
          className="w-[390px] h-[426px] md:w-[666px] md:h-[679px]"
        />
      </div>
    </section>
  );
};

export default Hero;
