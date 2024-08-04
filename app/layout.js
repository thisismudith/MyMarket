import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import { Icon } from "@iconify/react";
import SearchBox, {SignUps} from "@/app/providers/search";
import icon from "@/assets/pizza.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="Navigation">
					<div className="left">
						<Image src={icon} alt="Book Club" width={50} height={50} />
						<a href="/">MyMarket</a>
					</div>
					<SearchBox />
					<div className="right">
						<SignUps />
					</div>
				</div>
				{children}
			</body>
		</html>
	);
}
