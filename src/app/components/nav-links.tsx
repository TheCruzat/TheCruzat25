// module for primary navigation

import {ReactNode} from "react";

interface NLProps {
  feed: ReactNode;
}

export default function NavLinks({ feed }: NLProps) {
	if(!feed) {} else if(feed instanceof Array) return (
    <ul className="md:flex max-md:mb-[1rem]">
      { feed.map((link, ndx) => {
        return (
          <li key={ndx} className="md:mr-[1.75rem] last:mr-[0] text-white">
            <a className="block font-medium max-md:text-[1.125rem] uppercase p-[0.5rem_0rem]" href={link.link.url} title={link.title} target={link.link.target}>
              {link.link.title}
            </a>
          </li>
        )
      }) }
    </ul>
	)
}

