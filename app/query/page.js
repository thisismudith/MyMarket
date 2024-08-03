"use client";
import { useSearchParams } from "next/navigation";
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import { MapProvider } from "@/app/providers/map-provider";
import { useState, useEffect } from "react";
import Image from "next/image";
import "./style.css";
import { Box, Scatter } from "@ant-design/plots";

const defaultMapContainerStyle = {
	width: "100%",
	height: "60vh",
	borderRadius: "15px",
};

const defaultMapCenter = {
	lat: 21.1765773,
	lng: 72.789245,
};
const defaultMapZoom = 18;
const defaultMapOptions = {
	zoomControl: true,
	tilt: 0,
	gestureHandling: "auto",
	mapTypeId: "satellite",
};

function Card({ data }) {
	return (
		<div className="card">
			<Image src={data.media || "https://picsum.photos/200/100"} alt={data.name} width={200} height={200} />
			<h2>{data.name}</h2>
			<p>₹ {data.price}</p>
			<p>{data.description}</p>
		</div>
	);
}

function quantile(arr, q) {
	return arr.sort()[Math.ceil(arr.length * q) - 1];
}

export default function queryResults() {
	const searchParams = useSearchParams();
	const city = searchParams.get("city");
	const query = searchParams.get("query");
	const [data, setData] = useState(null);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		fetch(`/api?city=${city}&query=${query}`)
			.then((res) => res.json())
			.then((data) => {
				setData(data);
				setLoading(false);
			});
	}, []);

	if (isLoading) return <p>Loading...</p>;
	if (!data) return <p>No profile data</p>;

	const priceDistribution = {
		height: 160,
		autoFit: true,
		inset: 6,
		data: data,
		boxType: "boxplot",
		yField: "price",
		title: "Price Distribution (Box Plot)",
		// colorField: "steelblue",
		coordinate: { transform: [{ type: "transpose" }] },
	};

	const PriceVsRating = {
		height: 400,
		data: Object.values(
			data.reduce((acc, curr) => {
				acc[`${curr.lat}|${curr.lon}`] = acc[`${curr.lat}|${curr.lon}`] || { price: 0, rating: 0, count: 0 };
				acc[`${curr.lat}|${curr.lon}`].price += curr.price;
				acc[`${curr.lat}|${curr.lon}`].rating = curr.rating;
				acc[`${curr.lat}|${curr.lon}`].count++;
				return acc;
			}, {})
		).map((item) => ({ price: (item.price / item.count).toFixed(2), rating: item.rating })),
		xField: "price",
		yField: "rating",
		point: {
			size: 5,
			shape: "circle",
		},
		title: "Avg Pricing vs Rating",
	};

	var smth = Object.values(
		data.reduce((acc, curr) => {
			acc[`${curr.lat}|${curr.lon}`] = acc[`${curr.lat}|${curr.lon}`] || { price: 0, lat: curr.lat, lon: curr.lon, count: 0 };
			acc[`${curr.lat}|${curr.lon}`].price += curr.price;
			acc[`${curr.lat}|${curr.lon}`].count++;
			return acc;
		}, {})
	);

	return (
		<div>
			<h1 className="font-bold text-3xl mb-3">Some Sample Dishes</h1>
			<div className="samples">
				{data
					.filter((item) => item.media)
					.slice(0, 8)
					.map((item) => (
						<Card key={item.id} data={item} />
					))}
			</div>

			<div className="container">
				<h1 className="font-bold text-3xl mb-3">Figures</h1>
				<Box {...priceDistribution} className="mx-auto" />
				<Scatter {...PriceVsRating} className="mx-auto" />

				<h2>Average Pricing: ₹ {(data.reduce((acc, cur) => acc + cur.price, 0) / data.length).toFixed(2)}</h2>
				<h2>Average Rating: ★{(data.reduce((acc, cur) => acc + cur.rating, 0) / data.length).toFixed(2)}</h2>
			</div>

			<h1>Here are the results of your query</h1>
			<MapProvider>
				<GoogleMap mapContainerStyle={defaultMapContainerStyle} center={defaultMapCenter} zoom={defaultMapZoom} options={defaultMapOptions}>
					{smth.map((item) => (
						<MarkerF key={item.id} position={{ lat: item.lat, lng: item.lon }} label={(item.price / item.count).toFixed(0)} />
					))}
				</GoogleMap>
			</MapProvider>
		</div>
	);
}

export { queryResults };
