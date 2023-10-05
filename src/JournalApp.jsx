import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import { AppTheme } from './theme';
import { CheckingAuth } from './ui/components/CheckingAuth';
import { useCheckAuth } from './hooks';

const router = createBrowserRouter(AppRouter);

export const JournalApp = () => {

 const status = useCheckAuth();

  return (
    <AppTheme>
      {
        (status === 'checking')
          ? <CheckingAuth />
          : <RouterProvider router={router} />
      }
    </AppTheme>
  )
}