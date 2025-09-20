import { StrictMode, Suspense,lazy } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import GradientCircularProgress from './components/gradientCircularProgress/gradientCircularProgress.jsx'
const App = lazy(() => import('./App.jsx'));
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<GradientCircularProgress />}>
      <App />
    </Suspense>
  </StrictMode>,
)
