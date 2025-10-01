import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'
import { routes } from './routes'

export function App() {
  return (
    <div>
      <RouterProvider router={routes} />
      <Toaster richColors />
    </div>
  )
}
