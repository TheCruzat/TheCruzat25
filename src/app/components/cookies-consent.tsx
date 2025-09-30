'use client'
import {useState} from "react";

export default function CookiesConsent() {

	const [overlayOpen, setOverlayOpen] = useState(true);

	const toggleWindow = () => {
		setOverlayOpen(!overlayOpen);
	}

	if(overlayOpen) return (
		<div className="flex justify-center items-center fixed top-[0] left-[0] right-[0] bottom-[0] z-[9999] bg-[rgba(255,255,255,0.5)] backdrop-blur-[8px]">
			<div className="p-8 bg-white rounded-[2rem]">
				<p className="mb-[1rem] script-font text-[3rem]">Quick Q-</p>
				<p className="mb-[1rem]">Do you care if I run cookies for analytics and such?</p>
				<p className="mb-[1rem]">I'm a big believer in personal privacy, it's all good if you say no.</p>
				<p className="mb-[1rem]">But if you say no, you'll see this banner again. Up to you.</p>

				{/*<h3 className="script-font text-[3rem] w-full text-right">It's up to you...</h3>*/}

				<div className="h-[1.5rem]" />
				<div className="w-full grid grid-cols-2 gap-6 font-bold">
					<button
						onClick={() => toggleWindow()}
						className="w-full p-2 bg-white border-black border-2 rounded-[2rem] text-black"
						>No Cookies</button>
					<button
						className="w-full p-2 bg-black border-black border-2 rounded-[2rem] text-white"
						>Yes Cookies</button>
				</div>
			</div>
		</div>
	)
}
