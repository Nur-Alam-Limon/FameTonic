import Button from "./Button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="container mx-auto relative flex flex-col-reverse md:flex-row items-center justify-between">
      <div style={{ paddingTop: "57px", width: "516px" }}>
        <h1
          className="font-heading"
          style={{
            fontWeight: 700,
            fontSize: "35px",
            lineHeight: "100%",
            letterSpacing: "0%",
            verticalAlign: "middle",
            color: "#FFFFFF",
          }}
        >
          Want to Turn Social Media Into a Profitable Career?
        </h1>
        <p
        className="font-heading mt-[10px]"
          style={{
            fontWeight: 700,
            fontSize: "35px",
            lineHeight: "100%",
            letterSpacing: "0%",
            verticalAlign: "middle",
            color: "#00E7F9",
            textShadow: "0px 4px 4px #FC004E",
          }}
        >
          Discover your way to success with Fametonic:
        </p>

        <ul className="flex flex-col gap-y-[13px] mt-[16px] font-semibold text-base leading-[22px] tracking-normal align-middle">
          <li>
            ✨ Start growing your influence right away — no waiting required!
          </li>
          <li>
            ✨ Create viral TikToks and Reels step by step with easy-to-follow
            lessons
          </li>
          <li>✨ Use a Personal AI Worker to boost your content</li>
          <li>
            ✨ Learn from expert-led courses designed for aspiring influencers
          </li>
        </ul>

        <div className="flex flex-col w-[313px]">
          <Button />
          <p className="font-normal text-[12px] mt-[10px] leading-[16px] tracking-normal text-center align-middle">
            1-minute quiz for personalized insights
          </p>
        </div>
        <p className="mt-[30px] font-medium text-[#ABABAB] text-[12px] leading-[12px] tracking-normal align-middle">
          By clicking "Get Started", you agree with Terms and Conditions,
          Privacy Policy, Subscription Terms
        </p>
        <p className="mt-[12px] font-medium text-[#ABABAB] text-[10px] leading-[12px] tracking-normal align-middle">
          Fametonic 2025 ©All Rights Reserved.
        </p>
      </div>

      <div className="relative">
        <Image
          src="/mockup-phone.png"
          alt="Mobile mockup"
          width={666}
          height={679}
        />
      </div>
    </section>
  );
};

export default Hero;
