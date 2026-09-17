import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import Navbar from '../components/Navbar.tsx'

import ClerkProvider from '../integrations/clerk/provider'

import TanStackQueryDevtools from '../integrations/tanstack-query/devtools'

import appCss from '../styles.css?url'

import type { QueryClient } from '@tanstack/react-query'

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Skild - The Registry for Agentic Inteligence',
      },
      {
        name: 'description',
        content:
          'Discover,publish, and operate reusable agent capabilities from a route-driven workspace.',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body className="bg-[#090d16] font-sans antialiased text-slate-100 min-h-screen">
        <ClerkProvider>
          <div id="root-layout" className="relative flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 px-4 pt-4">
              <div className="mx-auto max-w-7xl rounded-2xl border border-white/10 bg-[#090d16]/80 p-4 backdrop-blur-md shadow-2xl">
                <Navbar />
              </div>
            </header>
            <main className="flex-1 px-4 py-8">
              <div className="mx-auto max-w-7xl">{children}</div>
            </main>
          </div>

          <TanStackDevtools
            config={{
              position: 'bottom-right',
            }}
            plugins={[
              {
                name: 'Tanstack Router',
                render: <TanStackRouterDevtoolsPanel />,
              },
              TanStackQueryDevtools,
            ]}
          />
        </ClerkProvider>
        <Scripts />
      </body>
    </html>
  )
}