import { dummySkills } from '#/lib/dummy-skills'
import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import {Terminal} from "lucide-react"
import  SkillCard  from '../components/skillCard.tsx';


export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <>
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
     <div className="mt-8 flex justify-center">
      <Link 
        to="/Neuville"
        className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl border border-purple-500/30 bg-purple-500/10 px-6 py-3 text-sm font-semibold text-purple-300 backdrop-blur-md transition-all duration-300 hover:border-purple-500/50 hover:bg-purple-500/20 hover:text-white hover:shadow-[0_0_25px_rgba(168,85,247,0.35)] active:scale-95"
      >
        <Terminal className="h-4 w-4 text-purple-400 transition-transform duration-300 group-hover:scale-110 group-hover:text-purple-300" />
        <span>Browse Registry</span>
      </Link><br />
          <Link className="flex-col mt-7" to='/Skill/new'>
          Publish Skill 
       </Link>
      
       
    </div>
    </section>
   
         <section>
          <div className='space-y-2'>
              <h2>Recently Created
                <span className='text-gradient'>
                 Skills
                </span>
              </h2>
              <p>
                {""}
                Latest Skills loaded from a descending order loaded from a database
              </p>
          </div>
          <div>
            {dummySkills.length > 0 ?(
              <div>
                {dummySkills.map((skills)=>(
                  <SkillCard key={skills.id}{...skills}/>
                ))}
              </div>
            ):(
              <p>No skills have been created yet.</p>
            )}
          </div>
        </section> 
     
        </>
  )
}
