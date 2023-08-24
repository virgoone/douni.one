import { render } from 'solid-js/web'
import { inject } from '@vercel/analytics'
import { Router, Route, Routes } from '@solidjs/router'
import 'uno.css'
import '@unocss/reset/tailwind.css'
import './main.css'

import App from './App'

const colorSchema = window.matchMedia('(prefers-color-scheme: dark)')
const performDark = () => {
  if (colorSchema.matches) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}
colorSchema.addEventListener('change', performDark)
performDark()

render(
  () => (
    <Router>
      <Routes>
        <Route path="/" component={App} /> {/* 👈 Define the home page route */}
      </Routes>
    </Router>
  ),
  document.getElementById('root') as HTMLElement,
)
inject()
