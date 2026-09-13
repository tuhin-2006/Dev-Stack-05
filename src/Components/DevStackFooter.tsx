import DevLogo from "../assets/logo-text.png";

const DevStackFooter = () => {
  return (
    <footer className="bg-white text-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Left Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <img
              src={DevLogo}
              alt="Dev-Stack-Logo"
              className="w-28"
            />

            <p className="mt-2 max-w-md text-sm leading-5 text-gray-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="flex gap-5 mt-5">
              <a
                href="https://github.com/tuhin-2006"
                className="text-sm text-gray-600 hover:text-pink-500 transition"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-sm text-gray-600 hover:text-pink-500 transition"
              >
                Twitter
              </a>

              <a
                href="#"
                className="text-sm text-gray-600 hover:text-pink-500 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right Side*/}
          <div className="grid grid-cols-3 gap-8">
            <div>
              <h6 className="font-semibold text-sm text-gray-900 mb-4">
                PRODUCT
              </h6>

              <div className="flex flex-col gap-2">
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-pink-500"
                >
                  Home
                </a>

                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-pink-500"
                >
                  Technologies
                </a>

                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-pink-500"
                >
                  Projects
                </a>
              </div>
            </div>

            <div>
              <h6 className="font-semibold text-sm text-gray-900 mb-4">
                COMPANY
              </h6>

              <div className="flex flex-col gap-2">
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-pink-500"
                >
                  About
                </a>

                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-pink-500"
                >
                  Contact
                </a>

                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-pink-500"
                >
                  Careers
                </a>
              </div>
            </div>

            <div>
              <h6 className="font-semibold text-sm text-gray-900 mb-4">
                LEGAL
              </h6>

              <div className="flex flex-col gap-2">
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-pink-500"
                >
                  Privacy Policy
                </a>

                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-pink-500"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col items-center gap-3 md:flex-row justify-between">
            <p className="text-xs text-gray-400">
              © 2026 Dev Stack. All rights reserved.
            </p>

            <div className="flex gap-6">
              <a
                href="#"
                className="text-xs text-gray-400 hover:text-pink-500"
              >
                Privacy
              </a>

              <a
                href="#"
                className="text-xs text-gray-400 hover:text-pink-500"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DevStackFooter;