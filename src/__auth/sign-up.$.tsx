import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute('/__auth/sign-up/$')({
    component:RouteComponent,
})

function RouteComponent() {
  return (
    <div>sign-up.$</div>
  )
}

