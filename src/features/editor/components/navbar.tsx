'use client';

import { Logo } from '@/features/editor/components/logo';

export const Navbar = () => {
  return (
    <nav className="w-full flex items-center p-4 h-[68px] gap-x-8 border-b lg:pl-[24px]">
      <Logo />
    </nav>
  );
};
