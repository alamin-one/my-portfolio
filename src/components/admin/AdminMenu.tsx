'use client';

import { signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Link from 'next/link';

import { AdminMenu1, AdminMenu2 } from '@/libs/content';
import Button from '../ui/button';
import { LogOut } from 'lucide-react';

const AdminMenu = ({ onToggle }: { onToggle: () => void }) => {
  const pathname = usePathname();

  return (
    <>
      <div className="space-y-2 mt-5 border-b border-b-border pb-5">
        {AdminMenu1.map((item, index) => {
          const Icon = item.icon;

          return (
            <Link
              onClick={onToggle}
              href={item.href}
              key={index}
              className={clsx(
                'py-2 px-3 rounded-xl flex justify-start items-center gap-2 text-title',
                pathname === item.href
                  ? 'bg-title/80 dark:bg-card text-background-secondary! dark:text-title-secondary!'
                  : 'hover:bg-card hover:text-title-secondary',
              )}
            >
              <Icon size={15} />
              {item.name}
            </Link>
          );
        })}
      </div>
      <div className="mt-5 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          {AdminMenu2.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                onClick={onToggle}
                href={item.href}
                key={index}
                className={clsx(
                  'py-2 px-3 rounded-xl flex justify-start items-center gap-2 text-title',
                  pathname === item.href
                    ? 'bg-title/80 dark:bg-card text-background-secondary! dark:text-title-secondary!'
                    : 'hover:bg-card hover:text-title-secondary',
                )}
              >
                <Icon size={15} />
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
      <Button
        type="button"
        onClick={() => signOut()}
        className="w-full border-none px-3! py-2! justify-start"
        variant="secondary"
      >
        <LogOut size={15} className="text-danger" />
        Logout
      </Button>
    </>
  );
};

export default AdminMenu;
