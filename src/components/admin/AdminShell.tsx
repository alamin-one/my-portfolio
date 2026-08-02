'use client';

import { ReactNode, useState } from 'react';
import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';

const AdminShell = ({ children }: { children: ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <AdminSidebar
        isOpen={isMenuOpen}
        onToggle={() => setIsMenuOpen(prev => !prev)}
      />
      <div className="flex-1 flex flex-col overflow-y-scroll scrollbar-none">
        <AdminHeader
          onToggle={() => setIsMenuOpen(prev => !prev)}
          isOpen={isMenuOpen}
        />
        <main className=""> {children}</main>
      </div>
    </div>
  );
};

export default AdminShell;
