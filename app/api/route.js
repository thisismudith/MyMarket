import { NextResponse } from "next/server";
import { readFileSync, existsSync } from "fs";
import { glob } from "glob";

// To handle a GET request to /api
export async function GET(request) {
	const searchParams = request.nextUrl.searchParams;
	const city = searchParams.get("city");
	const query = searchParams.get("query").toLowerCase().split(" ");
	console.log(`Returning results for "${query}" in "${city}"`);

	var isCity = existsSync(`./processed/${city}`);
	if (!isCity) {
		return NextResponse.json({ message: "City not found" }, { status: 404 });
	}

	var files = glob.sync(`./processed/${city}/*.json`);
	var results = [];

	// Search in each file. items.0.name
	for (var i = 0; i < files.length; i++) {
		var file = readFileSync(files[i], "utf8");
		var data = JSON.parse(file);
		var rating = Number(data.ratings.DINING.rating || data.ratings.DELIVERY.rating);
		if (rating <= 0) continue;
		for (var j = 0; j < data.items.length; j++) {
			if (query.every((word) => data.items[j].name.toLowerCase().includes(word)) == false) continue;
			if (data.items[j].price <= 0) continue;
			data.items[j].lat = Number(data.establishment.latitude);
			data.items[j].lon = Number(data.establishment.longitude);
			data.items[j].rating = rating;
			results.push(data.items[j]);
		}
	}

	// console.log(results);

	return NextResponse.json(results, { status: 200 });

	console.log(out);

	// Do whatever you want
	return NextResponse.json({ message: "Hello from Next.js" }, { status: 200 });
}
