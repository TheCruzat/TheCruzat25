import Image from "next/image";

interface HeadProps {
  border: String;
}

export default function Header({ border }: HeadProps) {
	return (
    <header className="
      fixed z-[2] top-[0]
      left-[--frameX] right-[--frameX]
      h-[--frameY]
      flex items-center justify-center
    ">
      <span className={`
        bg-white
        p-[0.25rem_0.75rem]
        sm:p-[0_2rem_0.5rem]
        rounded-[12rem]
        block
        mt-[var(--frameY)]
        border-4
        `+border}>
        <Image aria-hidden
          src="assets/the-cruzat-logo.svg"
          alt="The Cruzat"
          width="2266"
          height="546"
          className="h-auto
            max-w-[220px]
            sm:max-w-[220px]
            md:max-w-[260px]
            xl:max-w-[290px]
            max-md:mt-[0.625rem]
            max-sm:mt-[0.125rem]
            md:mt-[0.725rem]
          " />
      </span>
    </header>
	)
}
