import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import RandomName from './components/multi-name';
import { NotFoundWrapper } from './components/not-found-wrapper';

export default function NotFound() {
  const cDate = new Date();
  const cYear = cDate.getFullYear();
	
	return (
		<NotFoundWrapper>
					<div className="flex flex-col justify-between max-sm:justify-center p-8 sm:pb-[12.5vh] items-center relative max-sm:min-h-[175vh] sm:min-h-[100vh] bg-black text-white">
						<div className="relative w-full max-sm:fixed max-sm:top-[2rem] max-sm:overflow-hidden max-sm:h-[44px]">
							<Image
								aria-hidden
								width="960"
								height="44"
								alt="clouds"
								src="/e404/404-clouds.png"
								className="max-sm:w-[960px] sm:mx-auto max-sm:max-w-[unset] max-sm:absolute max-sm:top-[0] max-sm:right-[-3rem]"
								/>
						</div>
							<Image
								aria-hidden
								width="349"
								height="122"
								alt="wagon"
								src="/e404/404-wagon-walking.gif"
								className="
									mb-[4rem]
									max-sm:mb-[32.5vh]
									mx-auto
									max-sm:w-[50vw]
									max-sm:fixed
									max-sm:top-[calc(50%-61px)]
								"
								/>
						<div className="text-center">
							<div className="game-script text-center text-[1.25rem] leading-[2] max-w-[600px] bg-black relative z-[2] w-full">
								<p>You died of<br />doomscrolling.</p>
								{/*<p>Or you were looking for something not quite here?</p>*/}
							</div>
						</div>
					</div>

					<div className="max-sm:hidden bg-black h-[25vh]" />

					<div className="relative flex flex-col items-center bg-[#fddfa9] p-12 z-[100] min-h-[100vh] justify-center text-center">
						<h2 className="text-[2.75rem] script-font mb-[2rem] max-sm:mb-[4rem] leading-[1.2]">Can I offer you<br />an alternative?</h2>
						<div className="inline-flex max-sm:flex-col text-[175%] max-sm:gap-[1.5rem] sm:gap-[4rem]">
							<a href="https://coffeewith.thecruzat.com" target="_blank">Blog</a>
							<a href="https://builtby.thecruzat.com" target="_blank">Portfolio</a>
							<a href="https://cruzat.bandcamp.com" target="_blank">Music</a>
						</div>
					</div>


					<div className="flex flex-col justify-center items-center relative min-h-[100vh] max-sm:min-h-[200vh] bg-black text-white overflow-hidden">
						<Image
							aria-hidden
							width="349"
							height="122"
							alt="wagon"
							src="/e404/404-wagon-walking.gif"
							className="
								mb-[4rem]
								max-sm:mb-[32.5vh]
								mx-auto
								max-sm:w-[50vw]
								max-sm:fixed
								max-sm:top-[calc(50%-61px)]
								max-sm:z-[1]
								sm:hidden
							"
							/>
						<div className="bg-black relative z-[3] pt-[2rem]">
							<Image
								aria-hidden
								width="188"
								height="83"
								alt="clouds"
								src="/e404/404-fort.png"
								className="mb-[4rem] mx-auto"
								/>
							<div className="game-script text-[1.25rem] text-center leading-[2] max-w-[600px]">
								<p>We came at dawn to<br />a warm, dry place.</p>
							</div>
						</div>

						<div className="absolute bottom-[0] left-[0] bg-black z-[2] min-h-[100vh] w-full" />

					</div>
					<div style={{backgroundPosition: '50% 85%'}} className="bg-[url(/assets/bg/bg-red-room.webp)] bg-fixed flex flex-col justify-end items-center relative z-[3] min-h-[100vh] bg-black text-white">

					<div className="bg-[#8c1930] text-center text-[1rem] text-white py-[1.5rem] px-[5rem] rounded-t-[1.5rem]">
						<span className="">
		        <Image aria-hidden
		          src="/assets/the-cruzat-logo-w.svg"
		          alt="The Cruzat"
		          width="2266"
		          height="546"
		          className="h-auto max-w-[240px] sm:max-w-[240px] mb-[1rem] mx-auto" />
		        </span>
		              All Content &copy;2012-{cYear}<br />
		              Dan Cruzat aka <RandomName /><br />
		              All Rights Reserved<br />
		              <FontAwesomeIcon icon={faMicrophone} />DBAD<FontAwesomeIcon icon={faMicrophone} />
					</div>
					</div>
		</NotFoundWrapper>
	)
}
