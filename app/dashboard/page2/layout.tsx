import type { Metadata } from 'next';

const title = 'My Dashboard - Page 2';
const description = 'Free dashboard app written using NextJS';

export const metadata: Metadata = {
	title,
	description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return <div className="h-full w-full">{children}</div>;
}
