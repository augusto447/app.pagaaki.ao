import { RouterProvider } from 'react-router-dom';
import { routes } from './routes';
import { Toaster } from 'sonner';
export function App() {
  return (
    <div>
      <RouterProvider router={routes} />
      <Toaster richColors />
    </div>
  );
}
