import { createFileRoute } from '@tanstack/react-router'
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero'
import AboutMe from './components/aboutme/aboutme'
import Skills from './components/skills/skills'
import FeaturedProjects from './components/featured/featured'
import DeepDives from './components/casestudies/deepdives'
import Services from './components/services/services'
import Testimonials from './components/testimonials/testimonials'
import Contact from './components/contact/contact'

export const Route = createFileRoute('/')({
    component: Home,
})

function Home() {
    return (
        <div className="flex flex-col">
            <Navbar />
            <Hero />
            <AboutMe />
            <Skills />
            <FeaturedProjects />
            <DeepDives />
            <Services />
            <Testimonials />
            <Contact />
            <footer className="text-center py-6 text-sm bg-black text-white">
                Made with ❤️<br />
                © 2025 All rights reserved by Ali Yar Khan
            </footer>
        </div>
    )
}
