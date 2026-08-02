import AdminShell from '@/components/admin/AdminShell';
import { ReactNode } from 'react';

/*---------------------------------------------------*
 * Admin Layout                                      *
 * Provides the shared layout for all admin pages.   *
 *---------------------------------------------------*/
export default function AdminLayout({ children }: { children: ReactNode }) {
  return <AdminShell>{children}</AdminShell>;
}
