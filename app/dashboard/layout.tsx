import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import NextTopLoader from 'nextjs-toploader';

import { SidebarContextProvider } from 'components/context/sidebar-provider';
import { ThemeProvider } from 'components/context/theme-provider';
import Sidebar from 'components/sidebar';

const inter = Inter({ subsets: ['latin'] });

const title = 'My Dashboard';
const description = 'Free dashboard app written using NextJS';
const url = 'https://dashboard-demo.vercel.app';
const themeColor = '#09090b';
const loaderColor = '#1E88E5';

export const metadata: Metadata = {
	title,
	description,
	manifest: `${url}/manifest.json`,
	themeColor,
	viewport: { width: 'device-width', initialScale: 1, userScalable: false },
	twitter: {
		card: 'summary_large_image',
		title,
		url,
		description,
		creator: '@gokul_i',
		images: [`${url}/og.jpg`],
	},
	openGraph: { title, description, video: `${url}/demo.mp4`, url, type: 'website', images: [`${url}/og.jpg`] },
	icons: {
		icon: `${url}/icons/icon.svg`,
		shortcut: `${url}/favicon.ico`,
		apple: `${url}/icons/apple-icon.png`,
	},
	appleWebApp: {
		mobileWebAppCapable: 'yes',
		title,
		statusBarStyle: themeColor,
		startupImage: [`${url}/icons/apple-icon.png`],
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${inter.className} flex h-full flex-col text-gray-600 antialiased`}>
				<NextTopLoader color={loaderColor} height={2} showSpinner={false} />
				<ThemeProvider>
					<main className="relative flex min-h-full min-w-full bg-background">
						<SidebarContextProvider>
							<Sidebar />
							<div className="h-full w-full sm:ml-[64px]">
								<div className="flex h-full w-full flex-col max-sm:ml-0">{children}</div>
							</div>
						</SidebarContextProvider>
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
