'use client';

import Image from "next/image";
import Header from './header';
import Footer from './footer';
import { useRandomTheme } from './random-bg';
import { primaryColors } from './../../lib/colors';

interface ThemeWrapperProps {
  content: any;
  nav: any;
  socials: any;
  children: React.ReactNode;
}

export function ThemeWrapper({ content, children, nav, socials }: ThemeWrapperProps) {
  const beegee = useRandomTheme();

  if (!beegee) {
    return <div>{children}</div>;
  }

  const themeIndex = parseInt(beegee.bg.split('-').pop() || '0');

  const color = primaryColors[themeIndex];
  const borderClass = `border-[${color}]`;
  const bgClass = `bg-[${color}]`;

  return (
    <div
      className="relative w-full min-h-screen overflow-hidden"
      style={{
        backgroundColor: color,
      }}
    >
      <Image
        aria-hidden
        src={beegee.file}
        alt="stone"
        width={1800}
        height={1200}
        priority
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          objectFit: 'cover',
          zIndex: 1,
        }}
      />
      <div className="relative z-10 w-full">
        <Header borderColor={color} />
        {children}
        <Footer
          nav={nav}
          socials={socials}
          bgColor={color}
        />
      </div>
    </div>
  );
}
