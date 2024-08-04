"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Icon } from "@iconify/react";

export default function SearchBox() {
	const cities = ["Surat", "Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata", "Hyderabad", "Ahmedabad"];
	const [city, setCity] = useState("Surat");
	const [query, setQuery] = useState("");

	function redirectPage() {
		console.log(city, query);
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
				<input placeholder="Search Food Items..." onInput={(e) => setQuery(e.target.value)} />
				<Icon icon="fe:search" width="1.2em" height="1.2em" onClick={redirectPage} />
			</div>
		</div>
	);
}
