/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "picsum.photos",
				port: "",
			},
			{
				protocol: "https",
				hostname: "b.zmtcdn.com",
				port: "",
			},
		],
	},
};

export default nextConfig;
