import React, { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import toast from "react-hot-toast"

const SignUpForm = () => {

  const [showPassword, setShowPassword] = useState(false)

  async function onSubmit(e) {

    e.preventDefault()

    const formData = new FormData(e.target)

    const data = {
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password")
    }

    console.log("Signup Data:", data)

    try {

      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })

      const result = await res.json()

      console.log(result)

      if (res.ok) {
        toast.success("Account created successfully 🚀")
      } else {
        toast.error(result.message)
      }

    } catch (error) {
      console.log(error)
      toast.error("Signup failed")
    }

  }


  function handleGoogleLogin() {

    // redirect to backend google auth
    window.location.href = "http://localhost:5000/api/auth/google"

  }


  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center">

      <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950 to-black"></div>

      {/* Breaking News Ticker */}

      <div className="absolute top-0 w-full bg-red-700 text-white text-sm py-2 overflow-hidden z-20">
        <div className="ticker">
          🔴 BREAKING NEWS • GLOBAL POLITICS • MARKET LIVE • SPORTS UPDATE • TECH REPORT • MNC NEWS LIVE •
        </div>
      </div>


      <div className="relative z-10 flex w-full max-w-7xl mt-16">

        {/* LEFT SIDE */}

        <div className="hidden md:flex w-1/2 relative items-center justify-center px-16 text-white">

          <div className="absolute globe"></div>

          <div className="relative z-10 max-w-md">

            <h1 className="text-5xl font-extrabold leading-tight">
              <span className="text-red-600">MNC</span> NEWS
            </h1>

            <p className="mt-6 text-gray-300 text-lg leading-relaxed">
              The Future of Global Journalism.
              Real-time updates.
              International coverage trusted worldwide.
            </p>

            <div className="mt-8 space-y-2 text-sm text-gray-400">
              <p>✔ Live Global Coverage</p>
              <p>✔ Political & Market Intelligence</p>
              <p>✔ Breaking News Alerts</p>
              <p>✔ World Sports & Tech Reports</p>
            </div>

          </div>
        </div>


        {/* RIGHT SIGNUP */}

        <div className="w-full md:w-1/2 flex items-center justify-center px-6">

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10"
          >

            <div className="text-center mb-8">

              <h2 className="text-3xl font-bold text-gray-900">
                Create your account
              </h2>

              <p className="text-gray-500 mt-2 text-sm">
                Join the Global News Network
              </p>

            </div>


            <form onSubmit={onSubmit} className="space-y-5">

              {/* Username */}

              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                autoComplete="username"
                required
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-red-600 focus:outline-none"
              />

              {/* Email */}

              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                autoComplete="email"
                required
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-red-600 focus:outline-none"
              />

              {/* Password */}

              <div className="relative">

                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Password"
                  autoComplete="new-password"
                  required
                  className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-red-600 focus:outline-none"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-3 text-sm text-red-700 font-semibold"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>

              </div>


              {/* SIGNUP BUTTON */}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="w-full bg-red-700 hover:bg-red-800 text-white font-semibold py-3 rounded-xl shadow-md transition"
              >
                Sign Up
              </motion.button>


              {/* Divider */}

              <div className="flex items-center gap-3 my-4">
                <div className="flex-1 h-px bg-gray-300"></div>
                <span className="text-sm text-gray-500">OR</span>
                <div className="flex-1 h-px bg-gray-300"></div>
              </div>


              {/* GOOGLE LOGIN */}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                type="button"
                onClick={handleGoogleLogin}
                className="w-full flex items-center justify-center gap-3 border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium py-3 rounded-xl transition"
              >

                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="google"
                  className="w-5 h-5"
                />

                Continue with Google

              </motion.button>

            </form>


            <p className="mt-6 text-sm text-gray-600 text-center">

              Already have an account?

              <Link
                to="/sign-in"
                className="text-red-700 font-semibold hover:underline ml-1"
              >
                Sign In
              </Link>

            </p>

          </motion.div>

        </div>

      </div>


      {/* ANIMATIONS */}

      <style>

        {`

        .globe {

          width: 500px;
          height: 500px;
          border-radius: 50%;

          background:
          radial-gradient(circle at 30% 30%, rgba(255,255,255,0.08), transparent 70%),
          repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0 2px, transparent 2px 25px),
          repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0 2px, transparent 2px 25px);

          animation: rotate 60s linear infinite;

          opacity: 0.1;

        }

        @keyframes rotate {

          from { transform: rotate(0deg); }

          to { transform: rotate(360deg); }

        }

        .ticker {

          display: inline-block;
          white-space: nowrap;

          animation: tickerMove 25s linear infinite;

        }

        @keyframes tickerMove {

          0% { transform: translateX(100%); }

          100% { transform: translateX(-100%); }

        }

        `}

      </style>

    </div>
  )
}

export default SignUpForm