import { Link } from "@tanstack/react-router"

export default function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between">
      <div>
        <Link to="/" className="transition-opacity hover:opacity-90">
          <span className="text-2xl font-extrabold tracking-tight text-white">
           Neuville<span className="text-purple-400">.</span>
          </span>
        </Link>
      </div>

      <div>
        <Link 
          to="/sign-in/$"
          className="relative inline-flex items-center justify-center rounded-xl border border-purple-500/30 bg-purple-500/10 px-5 py-2 text-xs font-semibold text-purple-300 backdrop-blur-md transition-all duration-300 hover:border-purple-500/50 hover:bg-purple-500/20 hover:text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] active:scale-95"
        >
          Sign in
        </Link>
      </div>
    </nav>
  )
}