import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="container mx-auto w-full pt-8 flex items-center justify-between shadow-sm">
      {/* Left: Logo */}
      <div className="flex items-center">
        <Image src="/logo.png" alt="Fametonic Logo" width={150} height={40} />
      </div>

      {/* Right: Navigation Links */}
      <div className="flex space-x-6 text-black font-bold text-white" style={{ fontFamily: "'Figtree', sans-serif" }}>
        <Link href="/about-us" className="hover:text-primary transition-colors">
          About Us
        </Link>
        <Link href="/contact" className="hover:text-primary transition-colors">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
