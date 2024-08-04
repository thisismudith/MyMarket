"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import { useState } from "react";
import "./style.css";

function Card({ media, name, price, description }) {
	return (
		<div className="card">
			<Image
				src={media || "https://picsum.photos/200/100"}
				alt={name}
				width={200}
				height={200}
				priority={false}
				blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk8LL+DwACXQGGES7rgAAAAABJRU5ErkJggg=="
			/>
			<h2>{name}</h2>
			{price && <p>{price}</p>}
			<p>{description || "No Description Provided..."}</p>
		</div>
	);
}

const FoodData = [
	{
		name: "Cheese Frankie",
		description: "",
		media: "https://b.zmtcdn.com/data/dish_photos/fd8/30fe9ff5edf1d9a404a54cbcb3ef7fd8.jpeg",
		price: "₹ 129",
	},
	{
		name: "Tandoori Paneer Frankie",
		description: "",
		media: "https://b.zmtcdn.com/data/dish_photos/0ce/97694f964faf29f2c193159ad25cb0ce.jpeg",
		price: "₹ 129",
	},
	{
		name: "Pan Fried Noodles With Hunan Sauce",
		description: "Medium Spicy - Pan Fried Noodles Topped With Exotic Vegetables, Mushroom In Hunan Sauce",
		media: "https://b.zmtcdn.com/data/dish_photos/50a/69672b034955e345b8358419ff35b50a.jpeg",
		price: "₹ 545",
	},
	{
		name: "Chur Chur Naan Thali",
		description: "With Amritsari Chole Or Dal Makhani Special Chutney (Serves 1)",
		media: "https://b.zmtcdn.com/data/dish_photos/28d/5f04f095e85e8b9317c6e5b5f461628d.jpg",
		price: "₹ 279",
	},
	{
		name: "Pasta Indiana",
		description: "Paneer, onion, capsicum with Indian sauce.",
		media: "https://b.zmtcdn.com/data/dish_photos/bf0/a20f15c00558f6eeec0f2e9e78268bf0.jpeg",
		price: "₹ 349",
	},
	{
		name: "Spring Roll - Classic",
		description: "Non Spicy - Deep Fried Rolls Stuffed With Mix Vegetables & Seasoning Served With Hot Garlic Sauce",
		media: "https://b.zmtcdn.com/data/dish_photos/6bb/80b0d39506acf2c4ffe0fd0ac39396bb.jpeg",
		price: "₹ 370",
	},
	{
		name: "Golden Corn Pizza [Regular, 6 inches]",
		description: "Served with garlic oil & green chilli oil.",
		media: "https://b.zmtcdn.com/data/dish_photos/26b/fda97f7d74f890746c8ee5aca81b426b.png",
		price: "₹ 139",
	},
	{
		name: "Cheesy Pizza [Regular, 6 inches]",
		description: "Served with garlic oil & green chilli oil.",
		media: "https://b.zmtcdn.com/data/dish_photos/bb2/5e43836c80e0d78085b770711f5d8bb2.png",
		price: "₹ 149",
	},
];

const RestData = [
	{
		name: "Spice Petals",
		description: "North Indian, Mexican, Oriental, Chinese, Pizza, Desserts, Shake, Beverages",
		price: "⭐ 4.2",
		media: "https://b.zmtcdn.com/data/pictures/9/21055389/2b5b5a7bcbc6417fa783c113fd138a3d.jpg",
	},
	{
		name: "Table 101 - Surat Marriott Hotel",
		description: "Continental",
		price: "⭐ 4.5",
		media: "https://b.zmtcdn.com/data/pictures/9/19307519/133419b17974faa007e65d3557b5b52f.jpg",
	},
	{
		name: "The Bungalow Cafe",
		description: "Cafe, Beverages, Pizza",
		price: "⭐ 4.1",
		media: "https://b.zmtcdn.com/data/pictures/6/20166126/9d54daa3a6b7fd57375b022327b9f59f.jpg",
	},
	{
		name: "Vintage Asia - Surat Marriott Hotel",
		description: "Asian, Sushi, Chinese, Desserts, Beverages",
		price: "⭐ 4.4",
		media: "https://b.zmtcdn.com/data/pictures/8/19787878/227fe1d19e0b57faf6584a823788309b.jpg",
	},
	{
		name: "Zest House",
		media: "https://b.zmtcdn.com/data/pictures/1/19243651/2b13bfc56f12858687689ff08374997e.jpg",
		description: "North Indian, Continental, Fast Food, Beverages",
		price: "⭐ 3.8",
	},
	{
		name: "Green Gujarat",
		media: "https://b.zmtcdn.com/data/pictures/7/21152137/156b60d58bd05e803b06970044d2dc5c.jpeg",
		description: "Gujarati, North Indian, Continental",
		price: "⭐ 4.1",
	},
	{
		name: "SBC - Surat Marriott Hotel",
		media: "https://b.zmtcdn.com/data/pictures/6/19307526/d950a40ec82e26873aec1f5adcb40b6b.jpg",
		description: "Continental, Sandwich, Pizza, Burger, Beverages",
		price: "⭐ 4.1",
	},
];

export default function Home() {
	const [query, setQuery] = useState("");

	function redirect(event) {
		if (event.type == "keyup" && event.key !== "Enter") return setQuery(event.target.value);
		if (!query) return;
		window.location.href = "/query?city=surat&query=" + query;
	}

	return (
		<div className="flex flex-col gap-12 items-center overflow-hidden">
			<div className="header">
				<h1>My Market</h1>
				<p>
					We know how vital market research can be for small to big business. Expecially in the food industry where pricing matters the most. So why not make it simple for everyone, search the food
					item you are making below and get ahead of the market!
				</p>

				<div className="searchBox">
					<input type="text" placeholder="Search for a product" onKeyUp={redirect} />
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

			<div className="topFood">
				<h1 className="text-4xl font-bold text-center mb-3">Popular Food Items</h1>
				<div className="flex flex-row gap-4 overflow-x-auto">
					{FoodData.map((item) => (
						<Card key={btoa(item.name)} {...item} />
					))}
				</div>
			</div>
			<div className="topRestraunts">
				<h1 className="text-4xl font-bold text-center mb-3">Top Restaurants</h1>
				<div className="flex flex-row gap-4 overflow-x-auto">
					{RestData.map((item) => (
						<Card key={btoa(item.name)} {...item} />
					))}
				</div>
			</div>
			<div className="container">
				<h1>What are you doing here?</h1>
				<h2>Start Searching, its free of cost!</h2>
				<button>
					Go up <Icon icon="icon-park-outline:up" onClick={() => document.body.scrollIntoView({ behavior: "smooth" })} />
				</button>
			</div>
		</div>
	);
}
