// module to hold main content

interface ConProps {
	content: String;
}

export default function PageContent({ content }: ConProps) {
	return (
    <div className="bg-[rgba(255,255,255,0.9)] max-md:backdrop-blur-[10px]">
      <div
        className="
          page-content

          max-md:px-[--gutter]
          md:px-[--frameX]
          md:py-[--frameY]
          max-md:py-[calc(var(--frameY)*1)]
          md:max-w-[48rem]
          md:mx-auto
          md:mb-[6rem]
        "
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
	)
}
