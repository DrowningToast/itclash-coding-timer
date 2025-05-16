import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main className="bg-itcPrimaryBlack min-h-screen w-full flex flex-col items-center justify-center text-foreground p-12 font-geist-mono">
      <App />
    </main>
  </StrictMode>
);
