"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";

export default function SearchBox() {
	const cities = ["Surat", "Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata", "Hyderabad", "Ahmedabad"];
	const [city, setCity] = useState("Surat");
	const [query, setQuery] = useState("");

	function redirect(event) {
		if (event.type == "keyup" && event.key !== "Enter") return setQuery(event.target.value);
		if (city == "" || query == "") return alert("Please enter a valid query");
		if (city != "Surat") return alert("We are currently only serving Surat");

		window.location.href = `/query?city=${city.toLowerCase()}&query=${query.toLowerCase()}`;
	}

	return (
		<div className="middle">
			<div className="ComboBox">
				<select onChange={(e) => setCity(e.target.value)}>
					{cities.map((city) => (
						<option key={city} value={city}>
							{city}
						</option>
					))}
				</select>
			</div>
			<div className="SearchBox">
				<input placeholder="Search Food Items..." onKeyUp={redirect} />
				<Icon icon="fe:search" width="1.2em" height="1.2em" onClick={redirect} />
			</div>
		</div>
	);
}

function SignUps() {
	if (localStorage.getItem("signedIn"))
		return (
			<div className="middle">
				<Image src="https://mighty.tools/mockmind-api/content/cartoon/31.jpg" width={30} height={30} className="rounded-full" />
				<span className="cursor-pointer">Sign Out</span>
			</div>
		);

	return (
		<div className="middle">
			<Icon icon="iconamoon:enter" width="1.2em" height="1.2em" />
			<a className="SignUp" href="/signup">
				Sign up
			</a>
		</div>
	);
}

export { SignUps };
