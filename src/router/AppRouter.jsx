import { AuthLayout } from '../auth/layout/AuthLayout';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { JournalLayout } from '../journal/layout/JournalLayout';
import { JournalRoutes } from '../journal/routes/JournalRoutes';

export const AppRouter = [
  {
    path: 'auth',
    element: <AuthLayout />,
    children: AuthRoutes,
  },
  {
    path: '/',
    element: <JournalLayout />,
    children: JournalRoutes,
  },
]