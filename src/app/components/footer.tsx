'use client'
import {ReactNode, useState} from "react";
import NavLinks from './nav-links';
import SocialLinks from './social-links';

interface FootProps {
  nav: ReactNode;
  socials: ReactNode;
  bg: String;
}

export default function Footer({ nav, socials, bg }: FootProps) {

  // rail styling includes dynamic bg value
  const railClass = `foot-rail
    md:max-w-[48rem]
    md:mx-auto md:w-full
    flex items-center md:justify-between
    md:px-[--frameX]
    `+bg+`
    md:my-12rem
    md:rounded-[1.5rem]
    md:mb-[var(--frameY)]
    max-md:absolute
    max-md:bottom-[-242px]
    max-md:left-24
    max-md:right-24
    max-sm:left-12
    max-sm:right-12
    max-md:text-center
    max-md:flex-col
    max-md:pb-2
    max-md:pb-4
    max-md:rounded-t-[1.5rem]
    max-md:duration-200
    max-md:ease-in-out
  `;

  // mobile nav state
  const [mobileOpen, setMobileOpen] = useState(false);

  // mobile nav button control
  const toggleMobile = () => {
    setMobileOpen(!mobileOpen);
  }

  // mobile nav button
  const ToggleMobileTrigger = () => {
    return (
      <div className="max-md:mb-[1rem] hidden max-md:block">
        <button
          aria-label="Toggle mobile menu"
          className="
          w-[3rem]
          h-[3rem]
          rotate-[180deg]
          duration-200
          ease-in-out
        " onClick={() => toggleMobile()}>
          <svg
            className="
              max-w-[100%]
              " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M297.4 438.6C309.9 451.1 330.2 451.1 342.7 438.6L502.7 278.6C515.2 266.1 515.2 245.8 502.7 233.3C490.2 220.8 469.9 220.8 457.4 233.3L320 370.7L182.6 233.4C170.1 220.9 149.8 220.9 137.3 233.4C124.8 245.9 124.8 266.2 137.3 278.7L297.3 438.7z" fill="white" /></svg>
        </button>
      </div>
    )
  }

	return (
    <footer className="
      fixed z-[2] bottom-[0]
      left-[--frameX] right-[--frameX]
      h-[--frameY]
      md:flex md:items-center
      lg:max-w-[48rem]
      md:max-w-[36rem]
      md:mx-auto md:w-full
    " data-open={mobileOpen}>
      <div className={railClass}>

        <ToggleMobileTrigger />
        <NavLinks feed={nav} />
        <SocialLinks feed={socials} />

      </div>

    </footer>
	)
}
