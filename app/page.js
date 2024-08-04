"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
	const [query, setQuery] = useState("");

	function redirect(event) {
		if (event.type == "keydown" && event.key !== "Enter") return setQuery(event.target.value);
		if (!query) return;
		window.location.href = "/query?city=surat&query=" + query;
	}

	return (
		<div>
			<div className="header">
				<h1>My Market</h1>
				<p>
					We know how vital market research can be for small to big business. Expecially in the food industry where pricing matters the most. So why not make it simple for everyone, search the food
					item you are making below and get ahead of the market!
				</p>

				<div className="searchBox">
					<input type="text" placeholder="Search for a product" onKeyDown={redirect} />
					<button>
						<Icon icon="akar-icons:search" className="-scale-x-100" onClick={redirect} />
					</button>
				</div>
				<div className="custom-shape-divider-bottom-1722770232">
					<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
						<path
							d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
							className="shape-fill"></path>
					</svg>
				</div>
			</div>
		</div>
	);
}
