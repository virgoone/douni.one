import type { Component } from 'solid-js'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Posts from './components/Posts'
import Footer from './components/Footer'

const App: Component = () => {
  return (
    <main class="px-6 py-[8vh] max-w-[76ch] mx-auto prose prose-truegray xl:text-lg dark:prose-invert">
      <Hero />
      <Posts />
      <Projects />
      <Footer />
    </main>
  )
}

export default App
