'use client'

import clsx from 'clsx';
import { useSession } from 'next-auth/react';

const Abatar = ({ className }: { className?: string }) => {
  const { status, data } = useSession();

  return (
    <div className={clsx('flex justify-start items-center gap-2', className)}>
      <span className="w-12 h-12 bg-title/80 dark:bg-title-secondary/10   p-3 rounded-full text-background-secondary! dark:text-title-secondary! uppercase">
        {status === 'loading' ? '' : data?.user?.name?.slice(0, 2)}
      </span>

      <div className="">
        <p className="leading-[1em] font-medium text-title">
          {' '}
          {status === 'loading' ? 'loading' : data?.user?.name}
        </p>
        <p className="leading-[1.5em] text-sm  ">
          {' '}
          {status === 'loading' ? 'loading' : data?.user?.email}
        </p>
      </div>
    </div>
  );
};

export default Abatar;
