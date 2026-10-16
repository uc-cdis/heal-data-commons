import React from 'react';
import HealHeader from './HealNav/HealHeader';
import HealFooter from './HealNav/HealFooter';

export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
          <HealHeader />
          {children}
          <HealFooter />
        </>
    );
}
