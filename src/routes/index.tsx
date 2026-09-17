import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
   <div>
    <section>
      <div>
        <h1>
          The registry for <br />
          <span>Agentic Intelligence</span>
          <p>
            A high-perfomance registery for procedural agent skills.Discover,
            publish and operate reusable agent capabilities from a route driven workspace.
          </p>
        </h1>
      </div>
    </section>
   </div>
  )
}
