'use client';

import { SessionProvider } from 'next-auth/react';

import { ReactNode } from 'react';

const SessionProviderWrap = ({ children }: { children: ReactNode }) => {
  return <SessionProvider> {children} </SessionProvider>;
};

export default SessionProviderWrap;
