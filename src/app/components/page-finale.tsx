// module for Page Finale

import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import MultiName from './multi-name';

export default function PageFinale() {
  const cDate = new Date();
  const cYear = cDate.getFullYear();

  return (
        <div className="min-h-[--contentHeight] text-white flex flex-col md:justify-end max-md:justify-center max-md:backdrop-blur-[10px] max-md:pt-[3rem]">

          <Image
            src='assets/chicago-in-cascadia.png'
            width={50}
            height={50}
            alt="A Chicagoan In Cascadia"
            className="rounded-[8px] mx-auto"
             />


          <div
            className="
              page-content
              text-[18vw]
              sm:text-[14vw]
              md:text-[12vw]
              lg:text-[11vw]
              xl:text-[7vw]
              text-center
              leading-[0.8]
              max-md:px-[--gutter]
              md:px-[--frameX]
              md:py-[calc(var(--frameY)*0.25)]
              max-md:py-[calc(var(--gutter)*2)]
              md:max-w-[48rem]
              md:mx-auto
              script-font
              ">
            aut viam inveniam<br />aut faciam
          </div>
          <div
            className="
              page-content
              text-center
              leading-[1.6]
              max-md:px-[--gutter]
              md:px-[--frameX]
              md:pt-[calc(var(--frameY)*0.5)]
              md:pb-[calc(var(--frameY)*0.75)]
              max-md:py-[calc(var(--gutter)*2)]
              md:max-w-[48rem]
              md:mx-auto
            "
            // dangerouslySetInnerHTML={{ __html: footText }}
            >
              All Content &copy;2012-{cYear}<br />
              Dan Cruzat aka <MultiName /><br />
              All Rights Reserved<br />
              <FontAwesomeIcon icon={faMicrophone} />DBAD<FontAwesomeIcon icon={faMicrophone} />
          </div>
        </div>
	)
}
