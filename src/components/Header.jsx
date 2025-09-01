import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="shadow-md sticky top-0 z-10  md:h-20 lg:h-18 p-1.5 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between w-full">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex text-left">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-800 via-blue-500 to-blue-800 bg-clip-text text-transparent cursor-pointer">
              Helix
            </span>
          </div>

          {/* Menu Items */}
          <div className="flex-1 flex justify-center">
            <div className="hidden sm:flex sm:space-x-8 md:space-x-8 text-center">
              {/* Product button */}
              <Link to="/products">
                <button className="inline-flex items-center text-gray-700 hover:text-gray-900 cursor-pointer">
                  Products
                </button>
              </Link>

              {/* Solution and Services Dropdown */}
              <Link
                to={"/solution&services"}
                className="relative group gap-8 inline-flex "
              >
                <button className="inline-flex items-center text-gray-700 hover:text-gray-900 cursor-pointer">
                  Solution and Services
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown */}
                <div className="absolute left-0 md:mt-10 w-64 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-400 pointer-events-none group-hover:pointer-events-auto">
                  <div className="p-4 space-y-3">
                    <DropdownItem
                      icon="📊"
                      title="Analytics"
                      desc="Get a better understanding of your traffic"
                    />
                    <DropdownItem
                      icon="💬"
                      title="Engagement"
                      desc="Speak directly to your customers"
                    />
                    <DropdownItem
                      icon="🔒"
                      title="Security"
                      desc="Your customers’ data will be safe and secure"
                    />
                    <DropdownItem
                      icon="🔗"
                      title="Integrations"
                      desc="Connect with third-party tools"
                    />
                    <DropdownItem
                      icon="🔄"
                      title="Automations"
                      desc="Build strategic funnels that will convert"
                    />
                  </div>
                  <div className="flex border-t border-gray-200">
                    <Link
                      to="/"
                      className="flex-1 px-4 py-3 text-center text-indigo-600 hover:bg-gray-50"
                    >
                      ▶ Watch demo
                    </Link>
                    <Link
                      to="/"
                      className="flex-1 px-4 py-3 text-center text-gray-600 hover:bg-gray-50"
                    >
                      📞 Contact sales
                    </Link>
                  </div>
                </div>
              </Link>

              {/* Industries Dropdown */}
              <Link to={"/industries"} className="relative group inline-flex">
                <button className="inline-flex items-center text-gray-700 hover:text-gray-900 cursor-pointer">
                  Industries
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div className="absolute left-0 md:mt-10 w-48 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto">
                  <div className="p-4 space-y-2">
                    <a
                      href="#"
                      className="block text-gray-700 hover:text-indigo-600"
                    >
                      About Us
                    </a>
                    <a
                      href="#"
                      className="block text-gray-700 hover:text-indigo-600"
                    >
                      Careers
                    </a>
                    <a
                      href="#"
                      className="block text-gray-700 hover:text-indigo-600"
                    >
                      Blog
                    </a>
                    <a
                      href="#"
                      className="block text-gray-700 hover:text-indigo-600"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </Link>

              {/* About US */}
              <Link to={"/about"}>
                <button className="inline-flex items-center text-gray-700 hover:text-gray-900 cursor-pointer">
                  About Us
                </button>
              </Link>

              {/* Contact */}
              <Link to={"/contact"}>
                <button className="inline-flex items-center text-gray-700 hover:text-gray-900 cursor-pointer">
                  Contact
                </button>
              </Link>

              {/* Careers */}
              <Link to={"/careers"}>
                <button className="inline-flex items-center text-gray-700 hover:text-gray-900 cursor-pointer">
                  Career
                </button>
              </Link>

              {/* Get Quote
                <div>
                <button className="inline-flex items-center text-gray-700 hover:text-gray-900 cursor-pointer">
                  Get Quote
                </button>
              </div> */}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center mt-2">
            <Link to="/">
              <button
                title="login"
                type="button"
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer"
              >
                Get Quote
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );

  function DropdownItem({ icon, title, desc }) {
    return (
      <div className="flex items-start space-x-3 hover:bg-gray-50 p-2 rounded-md transition">
        <div className="text-xl">{icon}</div>
        <div>
          <p className="text-gray-900 font-medium">{title}</p>
          <p className="text-gray-500 text-sm">{desc}</p>
        </div>
      </div>
    );
  }
};

export default Header;
