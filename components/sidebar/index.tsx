'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { IconJarLogoIcon } from '@radix-ui/react-icons';
import Logo from 'public/logo.svg';

import { useSidebar } from 'components/context/sidebar-provider';
import { Separator } from 'components/ui/separator';

import { cn } from 'lib/utils';

import SidebarLink from './link';

const dashboardLinks = [
	{ name: 'Overview', href: '/', Icon: IconJarLogoIcon },
	{ name: 'Page 1', href: '/page1', Icon: IconJarLogoIcon },
	{ name: 'Page 2', href: '/page2', Icon: IconJarLogoIcon },
];

const settingsLinks = [
	{ href: 'mailto:test@gmail.com', name: 'Support', Icon: IconJarLogoIcon },
	{ href: '/settings', name: 'Settings', Icon: IconJarLogoIcon },
];

export default function Sidebar() {
	const pathname = usePathname();
	const router = useRouter();

	const { show, setShow } = useSidebar();

	async function signOut() {}

	return (
		<>
			<div
				onClick={() => setShow(false)}
				className={`fixed inset-0 left-0 right-0 z-[1] hidden bg-black bg-opacity-10 backdrop-blur ${cn({
					'!block': show,
				})}`}
			/>
			<nav
				className={`fixed bottom-0 left-0 top-0 z-[1] hidden min-h-full w-[70px] flex-col bg-[#09090b] px-3 py-2 transition-all sm:flex sm:w-[64px] sm:dark:border-r sm:dark:border-border ${cn(
					{ '!block': show }
				)}`}
			>
				<div className="z-[10] mb-[10px] flex h-full w-[100%] flex-col justify-between">
					<div className="flex h-full flex-col items-center justify-between">
						<div className="flex flex-col items-center">
							<Link
								onClick={() => setShow(false)}
								href="/"
								className="mt-[3px] rounded-lg p-1 transition-all focus:outline-none"
							>
								<Image className="block" src={Logo} width={50} height={50} alt="Expense.fyi" />
							</Link>
							<Separator className="mb-2 mt-[8px] border-t border-gray-100 opacity-[0.2]" />
							{dashboardLinks.map((link, index) => {
								return (
									<SidebarLink
										className={index === 0 ? '!mt-0' : ''}
										onClick={() => setShow(false)}
										key={link.name}
										name={link.name}
										active={pathname === link.href}
										href={link.href}
									>
										<link.Icon className="text-white" />
									</SidebarLink>
								);
							})}
						</div>
						<div className="flex flex-col items-center">
							{settingsLinks.map((link) => {
								return (
									<SidebarLink
										onClick={() => setShow(false)}
										key={link.href}
										active={pathname === link.href}
										href={link.href}
									>
										<link.Icon className="text-white" />
									</SidebarLink>
								);
							})}
							<button
								className={`mt-2 flex h-[40px] w-full items-center justify-center rounded-lg p-2 text-base tracking-wide text-white hover:bg-[#27272a]`}
								onClick={signOut}
								title="Sign out"
							>
								<div className="flex items-center">{/* <SignoutIcon className="text-white" /> */}</div>
							</button>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}
