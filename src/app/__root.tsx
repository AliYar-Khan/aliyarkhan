import { Outlet, createRootRoute, HeadContent, Scripts } from '@tanstack/react-router'
import type { ReactNode } from 'react'
import appCss from './globals.css?url'

export const Route = createRootRoute({
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
                title: 'Ali Yar Khan – Full-Stack Web & Mobile Developer | Freelancer',
            },
            {
                name: 'description',
                content: 'Experienced Full-Stack Web & Mobile Developer specializing in MERN stack, React Native, and Flutter. I build high-quality SaaS platforms, responsive web apps, and cross-platform mobile solutions for startups and enterprises worldwide.',
            },
        ],
        links: [
            { rel: 'stylesheet', href: appCss },
            { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css' },
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ],
    }),
    component: RootComponent,
})

function RootComponent() {
    return (
        <RootDocument>
            <Outlet />
        </RootDocument>
    )
}

function RootDocument({ children }: { children: ReactNode }) {
    return (
        <html>
            <head>
                <HeadContent />
            </head>
            <body>
                <div id="__next">
                    {children}
                </div>
                <Scripts />
            </body>
        </html>
    )
}
