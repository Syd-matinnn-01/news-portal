import React from "react"
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 border-t-4 border-red-700">

      {/* BREAKING NEWS BAR */}

      <div className="bg-red-700 text-white text-xs sm:text-sm py-2 text-center tracking-wide px-2">
        🔴 LIVE • GLOBAL NEWS • POLITICS • BUSINESS • TECHNOLOGY • SPORTS • MNC NEWS NETWORK
      </div>

      {/* MAIN FOOTER */}

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* ABOUT */}

        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-extrabold text-red-700 mb-4">
            MNC NEWS
          </h2>

          <p className="text-sm text-gray-600 leading-relaxed">
            MNC NEWS is an international digital news platform delivering
            breaking stories, political analysis, technology reports,
            financial updates and global sports coverage.
          </p>

          <p className="text-xs text-gray-500 mt-4">
            Trusted journalism for a connected world.
          </p>
        </div>


        {/* QUICK LINKS */}

        <div className="text-center sm:text-left">

          <h3 className="text-lg font-semibold mb-4 border-b pb-2">
            Quick Links
          </h3>

          <ul className="space-y-2 text-sm">

            <li className="hover:text-red-700 cursor-pointer">Home</li>
            <li className="hover:text-red-700 cursor-pointer">World News</li>
            <li className="hover:text-red-700 cursor-pointer">Politics</li>
            <li className="hover:text-red-700 cursor-pointer">Technology</li>
            <li className="hover:text-red-700 cursor-pointer">Sports</li>
            <li className="hover:text-red-700 cursor-pointer">Contact</li>

          </ul>

        </div>


        {/* CONTACT */}

        <div className="text-center sm:text-left">

          <h3 className="text-lg font-semibold mb-4 border-b pb-2">
            Contact Us
          </h3>

          <p className="text-sm text-gray-600 mb-2">
            📧 mncnews21@gmail.com
          </p>

          <p className="text-sm text-gray-600 mb-2">
            📞 +91 87800 67587
          </p>

          <p className="text-sm text-gray-600">
            🌍 MNC NEWS <br />
            Mumbai, India
          </p>

        </div>


        {/* SOCIAL */}

        <div className="text-center sm:text-left">

          <h3 className="text-lg font-semibold mb-4 border-b pb-2">
            Follow Us
          </h3>

          <div className="flex justify-center sm:justify-start gap-6 text-xl">

            <a href="#" className="hover:text-red-700 transition">
              <FaFacebookF />
            </a>

            <a href="#" className="hover:text-red-700 transition">
              <FaTwitter />
            </a>

            <a href="https://www.instagram.com/mnc_news?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="hover:text-red-700 transition">
              <FaInstagram />
            </a>

            <a href="www.youtube.com/@MNCNEWSCHANNEL" className="hover:text-red-700 transition">
              <FaYoutube />
            </a>

          </div>

          <p className="text-sm text-gray-600 mt-4">
            Follow us for breaking news updates.
          </p>

        </div>

      </div>


      {/* COPYRIGHT */}

      <div className="bg-gradient-to-r from-red-700 to-red-900 text-white text-center py-4 text-xs sm:text-sm px-4">
        © {new Date().getFullYear()} MNC NEWS • Global News Network • All Rights Reserved
      </div>

    </footer>
  )
}

export default Footer