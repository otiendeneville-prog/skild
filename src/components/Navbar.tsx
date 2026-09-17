import { Link } from "@tanstack/react-router"

export default function Navbar() {
  return (
    <nav>
      <div className="brand">
        <div>
          <div className="flex items-center px-4">
          </div>
        </div>
        
        <Link to="/">
          <span className="items-start text-2xl bg-fixed">Skild</span>
        </Link>
      </div>
      <div>
       <Link to="/sign-in/$">Sign in</Link>
      </div>
    </nav>
  )
}
