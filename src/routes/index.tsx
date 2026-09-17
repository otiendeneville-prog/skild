import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import {Terminal} from "lucide-react"

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <section className="relative flex flex-col items-center justify-center px-4 py-16 text-center md:py-24">
     
      <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-[120px] md:h-96 md:w-96" />

     
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-purple-300 backdrop-blur-md">
        <span>Agentic Registry</span>
      </div>

     
      <div className="max-w-4xl">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          The registry for <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-purple-500 bg-clip-text text-transparent">
            Agentic Intelligence
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg md:text-xl">
          A high-performance registry for procedural agent skills. Discover, publish, and operate reusable agent capabilities from a route-driven workspace.
        </p>
      </div>
      <div>
        <Link to='/Neuville'>
           <Terminal size={18}/>
           <span>Browse Registery</span>
        
        </Link>
      </div>
    </section>
  )
}
