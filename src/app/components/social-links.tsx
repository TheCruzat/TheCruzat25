// module for social icon links

import {ReactNode} from "react";

// fontawesome imports + settings
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab);

interface SLProps {
  feed: ReactNode;
}

export default function SocialLinks({ feed }: SLProps) {
	if(!feed) {} else if(feed instanceof Array)  return (
    <ul className="flex">
      { feed.map((link, ndx) => {
        return (
          <li key={ndx}
            className="mr-[0.5rem] last:mr-[0]">
            <a className="block
              p-[0.5rem_0rem]
              text-white
              text-[125%]

              max-md:text-[175%]
              "
                href={link.link.url} title={link.title} target="_blank">

              <FontAwesomeIcon icon={['fab', link.icon]} />
            </a>
          </li>
        )
      }) }
    </ul>
	)
}

