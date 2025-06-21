import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav
      className="container mx-auto w-full flex items-start justify-between"
      style={{ paddingTop: "35px" }}
    >
      {/* Left: Logo */}
      <div className="flex items-right">
        <Image src="/logo.png" alt="Fametonic Logo" width={170} height={72} />
      </div>

      {/* Right: Navigation Links */}
      <div
        className="font-sans"
        style={{ color: "#A9A9A9", fontWeight: "600", fontSize: "18px" }}
      >
        <Link href="/about-us" style={{ paddingRight: "40px" }}>
          About Us
        </Link>
        <Link href="/contact" className="">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
