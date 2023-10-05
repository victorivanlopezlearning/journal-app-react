import { AuthLayout } from '../auth/layout/AuthLayout';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { JournalLayout } from '../journal/layout/JournalLayout';
import { JournalRoutes } from '../journal/routes/JournalRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = [
  {
    path: 'auth',
    element: 
    <PublicRoute>
      <AuthLayout />
    </PublicRoute>,
    children: AuthRoutes,
  },
  {
    path: '/',
    element:
    <PrivateRoute>
      <JournalLayout />
    </PrivateRoute>,
    children: JournalRoutes,
  },
]