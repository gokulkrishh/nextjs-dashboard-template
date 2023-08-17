import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import NextTopLoader from 'nextjs-toploader';

import { SidebarContextProvider } from 'components/context/sidebar-provider';
import { ThemeProvider } from 'components/context/theme-provider';
import DashboardLayout from 'components/layout/layout';
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${inter.className} flex h-full flex-col text-gray-600 antialiased`}>
				<NextTopLoader color={loaderColor} height={2} showSpinner={false} />
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<main className="relative flex min-h-full min-w-full bg-background">
						<DashboardLayout>
							<SidebarContextProvider>
								<Sidebar />
								<div className="h-full w-full sm:ml-[64px]">
									<div className="flex h-full w-full flex-col max-sm:ml-0">{children}</div>
								</div>
							</SidebarContextProvider>
						</DashboardLayout>
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
