'use client';
import { MenuIcon, X } from 'lucide-react';

const AdminHeader = ({
  onToggle,
  isOpen,
}: {
  onToggle: () => void;
  isOpen: boolean;
}) => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 md:hidden px-5 py-3 flex justify-between items-center bg-card z-10">
        <span>Overview</span>

        <button
          className="p-1.5 border border-border rounded-md cursor-pointer"
          onClick={onToggle}
        >
          {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
    </>
  );
};

export default AdminHeader;
