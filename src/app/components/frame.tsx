import PageIntro from './page-intro';
import PageContent from './page-content';
import PageFinale from './page-finale';

interface FrameContent {
  content: String;
}

export default function Frame({ content }: FrameContent) {

 	return (
    <div
      className="
        fixed z-[1]
        overflow-y-scroll
        top-[--frameY] bottom-[--frameY]
        left-[--frameX] right-[--frameX]
        lg:left-[12vw] lg:right-[12vw]

        md:rounded-[2.5rem]

        shadow-[0_0_2.75rem_rgba(0,0,0,0.4)]
        inset-shadow-[rgba(0,0,0,0.4)]
        md:backdrop-blur-[10px]
        border-0
        border-white
        max-md:border-x-0
      "> {/* max-md:border-t-[2px] max-md:border-b-[2px] md:border-[2px] border-[#cccccc] */}

        <PageIntro />

        <PageContent content={content} />

        <PageFinale />

    </div>
	)
}
