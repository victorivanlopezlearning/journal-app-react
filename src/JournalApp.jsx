import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { AppRouter } from './router/AppRouter';

const router = createBrowserRouter(AppRouter);

export const JournalApp = () => {
  return (
    <RouterProvider router={router} />
  )
}