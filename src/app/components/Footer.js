"use client";

import Image from "next/image";
import { useState } from "react";
import uwLogo from "public/uwLogo.png";
import devcomLogo from "public/devcomLogo.png";
import ucfLogo from "public/ucfLogo.png";

export default function Footer() {
	const imageDivStyle = "px-2";
	const imgWidthSize = 250;
	const imgHeightSize = 250;

	const desktopFooter = (
		<footer className=' bg-zinc-300 max-h-fit'>
			<div className='flex flex-col'>
				<div className='flex flex-row justify-center'>
					<div className="text-black text-base font-normal font-['League Spartan'] tracking-[3.20px]">
						BROUGHT TO YOU BY:
					</div>
				</div>
				<div className='flex flex-row justify-evenly items-center'>
					<div className={imageDivStyle}>
						<Image src={devcomLogo} alt='devcom Logo' width={imgWidthSize} height={imgHeightSize} />
					</div>

					<div className={imageDivStyle}>
						<Image src={uwLogo} alt='uwLogo Logo' width={imgWidthSize} height={imgHeightSize} />
					</div>
					<div className={imageDivStyle}>
						<Image src={ucfLogo} alt='deucfLogovcom Logo' width={imgWidthSize} height={imgHeightSize} />
					</div>
				</div>
			</div>
		</footer>
	);

	const mobileFooter = <></>;

	const [footer, setFooter] = useState(desktopFooter);

	return footer;
}
