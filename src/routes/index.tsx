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
        </h1>
      </div>
    </section>
   </div>
  )
}
