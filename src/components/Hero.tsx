import Button from "./Button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="container mx-auto relative flex flex-col-reverse md:flex-row items-center justify-between py-8">
      <div className="max-w-xl">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 font-heading">
          Want to Turn Social Media Into a Profitable Career?
        </h1>
        <p
          style={{
            fontFamily: "'Urbanist', sans-serif",
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

        <ul className="mt-6 space-y-3 text-base text-gray-200">
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

        <div className="flex flex-col">
          <Button />
          <p className="text-xs text-gray-500 mt-4 text-center">
            1-minute quiz for personalized insights
          </p>
        </div>
        <p className="text-sm text-gray-400 mt-4">
          By clicking "Get Started", you agree with Terms and Conditions, Privacy Policy, Subscription Terms
        </p>
        <p className="text-sm text-gray-400 mt-4">Fametonic 2025 ©All Rights Reserved.</p>
      </div>

      <div className="mt-12 md:mt-0 md:ml-12 relative">
        <Image
          src="/mockup-phone.png"
          alt="Mobile mockup"
          width={666}
          height={679}
          className="drop-shadow-2xl"
        />
      </div>
    </section>
  );
};

export default Hero;
