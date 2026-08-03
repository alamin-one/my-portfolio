'use client';
import { MenuIcon, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

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
        <Link href={'/'}>
          <Image src={'/logo.webp'} alt="Logo" width={120} height={100} />
        </Link>
        <button
          className="p-1.5 border border-border rounded-md cursor-pointer"
          onClick={onToggle}
        >
          {isOpen ? <X size={27} /> : <MenuIcon size={27} />}
        </button>
      </div>
    </>
  );
};

export default AdminHeader;
