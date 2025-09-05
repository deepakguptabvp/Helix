import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  const followUsData = [
    { icon: <FaFacebookF size={20} /> },
    { icon: <FaLinkedinIn size={20} /> },
    { icon: <FaXTwitter size={20} /> },
    { icon: <FaInstagram size={20} /> },
  ];

  return (
    <footer className="max-w-full bg-black/90 text-white font-sans">
      <section className="grid grid-cols-1 space-y-8 lg:grid-cols-4 p-10 md:px-28 md:py-20 ">
        {/* section -1 */}
        <div className="flex flex-col md:flex space-y-3">
          <h1 className="text-lg font-normal">Company</h1>
          <Link
            to={"/"}
            className="text-sm hover:underline text-white/70 font-normal"
          >
            Home
          </Link>
          <Link
            to={"/products"}
            className="text-sm hover:underline text-white/70 font-normal"
          >
            Products
          </Link>
          <Link
            to={"/about"}
            className="text-sm hover:underline text-white/70 font-normal"
          >
            About Us
          </Link>
          <Link
            to={"/career"}
            className="text-sm hover:underline text-white/70 font-normal"
          >
            Careers
          </Link>
          <Link
            to={"/contact"}
            className="text-sm hover:underline text-white/70 font-normal"
          >
            Contact Us
          </Link>
        </div>

        {/* section -2 */}
        <div className="flex flex-col md:flex space-y-3">
          <h1 className="text-lg font-normal">Solutions & Services</h1>
          <Link
            to={"/"}
            className="text-sm hover:underline text-white/70 font-normal"
          >
            Artificial Intelligence
          </Link>
          <Link
            to={"/products"}
            className="text-sm hover:underline text-white/70 font-normal"
          >
            Cyber Security
          </Link>
          <Link
            to={"/about"}
            className="text-sm hover:underline text-white/70 font-normal"
          >
            Digital Workspaces
          </Link>
          <Link
            to={"/career"}
            className="text-sm hover:underline text-white/70 font-normal"
          >
            Networking
          </Link>
          <Link
            to={"/contact"}
            className="text-sm hover:underline text-white/70 font-normal"
          >
            Modern Infrastructure
          </Link>
          <Link
            to={"/contact"}
            className="text-sm hover:underline text-white/70 font-normal"
          >
            Supply Chain & Lifecycle
          </Link>
        </div>

        {/* section -3 */}
        <div className="flex flex-col md:flex space-y-3">
          <h1 className="text-lg font-normal">Industries</h1>
          <Link
            to={"/"}
            className="text-sm hover:underline text-white/70 font-normal"
          >
            Enterprise Business
          </Link>
          <Link
            to={"/products"}
            className="text-sm hover:underline text-white/70 font-normal break-words whitespace-normal max-w-[10rem]"
          >
            Small & Medium Business, Healthcare
          </Link>
          <Link
            to={"/about"}
            className="text-sm hover:underline text-white/70 font-normal"
          >
            Manufacturing
          </Link>
          <Link
            to={"/career"}
            className="text-sm hover:underline text-white/70 font-normal"
          >
            Retail
          </Link>
          <Link
            to={"/contact"}
            className="text-sm hover:underline text-white/70 font-normal"
          >
            Central Government
          </Link>
        </div>

        {/* Section-4 follow us */}
        <div className="flex flex-col space-y-3">
          <h1 className="text-lg font-normal">Follow Us on</h1>
          <div className="flex flex-row gap-4">
            {followUsData.map((item, index) => (
              <div key={index} className="flex flex-col">
                <p className="rounded-full border-1 p-2 bg-neutral-800 cursor-pointer">
                  {item.icon}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
