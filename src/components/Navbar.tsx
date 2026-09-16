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
          <span>Skild</span>
        </Link>
      </div>
      <div>
       <link to="/sign-in/$">Sign in</link>
      </div>
    </nav>
  )
}
