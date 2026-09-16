import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import Navbar from '../components/Navbar.tsx'; 
import Crosshair from '../components/Crosshair.tsx';


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
        content:'Discover,publish, and operate reusable agent capabilities from a route-driven workspace.',
      }
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
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className='font-sans border border-gray-50 antialiased wrap-anywhere'>
        <ClerkProvider>
          <div id='root-layout'>
              <header>
                <div className='border items-center rounded-2xl bg-accent p-4 m-4 w-full flext justify-center'>
                    <Navbar />
                </div>
              </header>
              <main>
                <div className='frame'>      
               {children}
                </div>
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
