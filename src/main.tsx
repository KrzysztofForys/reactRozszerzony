import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './features/theme/ThemeContext.tsx'
import { AppProviders } from './app/providers.tsx'
import { ErrorBoundary } from './shared/components/ErrorBoundary.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <AppProviders>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </AppProviders>
    </ErrorBoundary>
  </StrictMode>,
)
