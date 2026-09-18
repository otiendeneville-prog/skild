import { SignUp } from "@clerk/tanstack-react-start"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute('/__auth/sign-up/$')({
    component:RouteComponent,
})

function RouteComponent() {
  return (
     <section>
     <SignUp
      routing="path"
      path="sign-up"
      sign-upUrl="/sign-in"
      fallbackRedirectUrl="/"
     />
   </section>
  )
}

