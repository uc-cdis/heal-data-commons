import React from 'react';
import HealHeader from './HealNav/HealHeader';
import HealFooter from './HealNav/HealFooter';

export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div className="flex flex-col min-h-dvh">
          <HealHeader />
          <main className="flex-1">{children}</main>
          <HealFooter />
        </div>
    );
}
