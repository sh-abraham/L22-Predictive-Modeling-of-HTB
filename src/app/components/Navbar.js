"use client";

import { useState } from "react";

import Link from "next/link";

export default function Navbar() {
	const navbarHeight = 86;
	const navBarTextClassName =
		"text-white text-base font-normal font-['League Spartan'] tracking-[3.20px] hover:opacity-50 ease-in-out duration-300";
	const textBorderClassName = "";

	const desktopNavbar = (
		<header className='bg-neutral-700 py-8 flex flex-row justify-around items-center sticky top-0'>
			<Link href={"/"} className={navBarTextClassName}>
				HOME
			</Link>
			<Link href={"/About"} className={navBarTextClassName}>
				ABOUT
			</Link>
			<Link href={"/Documentation"} className={navBarTextClassName}>
				DOCUMENTATION
			</Link>

			<Link href={"/Contact"} className={navBarTextClassName}>
				CONTACT
			</Link>
		</header>
	);

	const mobileNavbar = <></>;

	const [navbar, setNavbar] = useState(desktopNavbar);

	return navbar;
}
