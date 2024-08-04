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
			{
				protocol: "https",
				hostname: "mighty.tools",
				port: "",
			},
		],
	},
};

export default nextConfig;
