// 🔴 Polyfill Safari / iOS — TEM que vir antes de qualquer import
if (!('requestIdleCallback' in window)) {
  ;(window as any).requestIdleCallback = function (cb: any) {
    return setTimeout(() => {
      cb({
        didTimeout: false,
        timeRemaining: () => 0,
      })
    }, 1)
  }
}

if (!('cancelIdleCallback' in window)) {
  ;(window as any).cancelIdleCallback = function (id: number) {
    clearTimeout(id)
  }
}

// 👇 imports só depois do polyfill
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')!).render(<App />)
