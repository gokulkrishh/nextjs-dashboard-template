'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { DashboardIcon, HomeIcon } from '@radix-ui/react-icons';
import { PieChart, PlayIcon, SettingsIcon } from 'lucide-react';
import Logo from 'public/logo.svg';

import { useSidebar } from 'components/context/sidebar-provider';
import { Separator } from 'components/ui/separator';

import { cn } from 'lib/utils';

const dashboardLinks = [
	{ name: 'Overview', href: '/', Icon: HomeIcon },
	{ name: 'Page 1', href: '/page1', Icon: HomeIcon },
	{ name: 'Page 2', href: '/page2', Icon: HomeIcon },
];

const SidebarLink = ({ active, children, href }: { active: boolean; children: any; href: string }) => {
	return (
		<Link
			className={cn(
				'mt-[10px] flex items-center justify-center rounded-lg p-2 tracking-wide text-white transition-all hover:bg-[#27272a]',
				{ 'bg-[#27272a]': active }
			)}
			href={href}
		>
			{children}
		</Link>
	);
};

export default function Sidebar() {
	const pathname = usePathname();
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
								className="mt-[10px] mb-[10px] rounded-lg transition-all focus:outline-none"
							>
								<DashboardIcon className="block text-white" width={21} height={21} />
							</Link>
							<Separator className="mb-2 mt-[8px] border-t border-gray-100 opacity-[0.2]" />
							<SidebarLink href="/" active={pathname === '/'}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="20"
									width="20"
									fill="currentColor"
									className="text-white"
								>
									<path d="M10.771 2.042q2.875.291 4.896 2.312t2.312 4.896h-5.583q-.229-.562-.646-.979-.417-.417-.979-.646Zm1.5 1.854v2.812q.291.23.562.48.271.25.479.562h2.813q-.5-1.354-1.5-2.354t-2.354-1.5Zm-3-1.854v5.583q-.771.292-1.261.927-.489.636-.489 1.448 0 .812.489 1.458.49.646 1.261.917v5.583q-3.104-.312-5.177-2.583Q2.021 13.104 2.021 10t2.073-5.385q2.073-2.282 5.177-2.573Zm-1.5 1.854q-1.917.75-3.083 2.406Q3.521 7.958 3.521 10q0 2.062 1.167 3.719 1.166 1.656 3.083 2.385v-2.812q-.792-.584-1.271-1.438Q6.021 11 6.021 10T6.5 8.146q.479-.854 1.271-1.438Zm4.625 6.854h5.583q-.291 2.875-2.312 4.896t-4.896 2.312v-5.583q.562-.229.989-.646.428-.417.636-.979Zm.916 1.5q-.208.312-.468.573-.261.26-.573.469v2.812q1.354-.5 2.354-1.5t1.5-2.354ZM6.021 10Zm7.291-2.25Zm0 4.5Z"></path>
								</svg>
							</SidebarLink>
							<SidebarLink href="/page1" active={pathname === '/page1'}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="20"
									width="20"
									fill="currentColor"
									className="text-white"
								>
									<path d="M5.083 18.333q-.729 0-1.239-.51-.511-.511-.511-1.24V3.417q0-.729.511-1.24.51-.51 1.239-.51h5.771q.354 0 .677.135.323.136.573.386l4.042 4.041q.25.25.385.573.136.323.136.677v9.104q0 .729-.511 1.24-.51.51-1.239.51Zm0-11.583V3.417v13.166V6.75ZM8.375 15q-.354 0-.615-.26-.26-.261-.26-.615t.26-.615q.261-.26.615-.26h2.417v-.708H8.375q-.354 0-.615-.261-.26-.26-.26-.614V9.208q0-.354.26-.614.261-.261.615-.261h.75v-.041q0-.354.26-.615.261-.26.615-.26t.615.26q.26.261.26.615v.041h.75q.354 0 .615.261.26.26.26.614t-.26.615q-.261.26-.615.26H9.25v.709h2.375q.354 0 .615.26.26.26.26.615v2.458q0 .354-.26.615-.261.26-.615.26h-.75v.042q0 .354-.26.614-.261.261-.615.261t-.615-.261q-.26-.26-.26-.614V15Zm6.542-8.25H11.75q-.354 0-.615-.26-.26-.261-.26-.615V3.417H5.083v13.166h9.834Z"></path>
								</svg>
							</SidebarLink>
							<SidebarLink href="/page2" active={pathname === '/page2'}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="20"
									width="20"
									fill="currentColor"
									className="text-white"
								>
									<path d="M6.708 3.417q-.354 0-.614-.261-.261-.26-.261-.614t.261-.615q.26-.26.614-.26h6.584q.354 0 .614.26.261.261.261.615t-.261.614q-.26.261-.614.261Zm-2.458 2.5q-.354 0-.615-.261-.26-.26-.26-.614t.26-.615q.261-.26.615-.26h11.521q.354 0 .614.26.261.261.261.615t-.261.614q-.26.261-.614.261Zm-.833 12.416q-.729 0-1.24-.51-.51-.511-.51-1.24V8.417q0-.729.51-1.24.511-.51 1.24-.51h13.166q.729 0 1.24.51.51.511.51 1.24v8.166q0 .729-.51 1.24-.511.51-1.24.51Zm0-1.75h13.166V8.417H3.417v8.166Zm6.25-1.604 2.625-1.75q.396-.271.406-.729.01-.458-.386-.729l-2.645-1.75q-.438-.292-.896-.042-.459.25-.459.771v3.5q0 .542.459.781.458.24.896-.052Zm-6.25-6.583v8.187-8.187Z"></path>
								</svg>
							</SidebarLink>
						</div>
						<div className="flex flex-col items-center">
							<SidebarLink href="mailto:support@acme.com" active={false}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="20"
									width="20"
									fill="currentColor"
									className="text-white"
								>
									<path d="M9.958 15.021q.459 0 .771-.313.313-.312.313-.77 0-.459-.313-.771-.312-.313-.771-.313-.458 0-.77.313-.313.312-.313.771 0 .458.313.77.312.313.77.313Zm.104-8.563q.584 0 .948.313.365.312.365.791 0 .334-.229.709-.229.375-.646.729-.667.583-.969 1.073-.302.489-.302.969 0 .312.209.52.208.209.541.209.313 0 .552-.209.24-.208.302-.562.063-.333.282-.635.218-.303.718-.782.667-.625.907-1.114.239-.49.239-1.073 0-1.084-.791-1.75-.792-.667-2.084-.667-.875 0-1.531.344-.656.344-1.135 1.031-.167.229-.094.5.073.271.302.458.271.209.614.136.344-.073.573-.386.229-.291.532-.447.302-.157.697-.157ZM10 18.333q-1.708 0-3.229-.656-1.521-.656-2.656-1.781-1.136-1.125-1.792-2.646-.656-1.521-.656-3.25t.656-3.25q.656-1.521 1.792-2.646Q5.25 2.979 6.771 2.323 8.292 1.667 10 1.667q1.75 0 3.271.656t2.646 1.781q1.125 1.125 1.771 2.646.645 1.521.645 3.25t-.645 3.25q-.646 1.521-1.771 2.646t-2.646 1.781q-1.521.656-3.271.656ZM10 10Zm0 6.583q2.771 0 4.677-1.927 1.906-1.927 1.906-4.656 0-2.729-1.906-4.656Q12.771 3.417 10 3.417q-2.708 0-4.646 1.927Q3.417 7.271 3.417 10q0 2.729 1.937 4.656Q7.292 16.583 10 16.583Z"></path>
								</svg>
							</SidebarLink>
							<SidebarLink href="/settings" active={pathname === '/settings'}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="20"
									width="20"
									fill="currentColor"
									className="text-white"
								>
									<path d="M11.583 18.333H8.417q-.334 0-.573-.218-.24-.219-.282-.553l-.229-1.854q-.208-.125-.458-.27-.25-.146-.458-.271l-1.729.729q-.313.125-.626.021-.312-.105-.479-.396l-1.562-2.729q-.167-.292-.094-.604.073-.313.323-.521l1.458-1.125V9.458L2.25 8.333q-.25-.208-.323-.521-.073-.312.094-.604l1.562-2.729q.167-.291.479-.396.313-.104.626.021l1.729.729q.208-.125.458-.27.25-.146.458-.271l.229-1.854q.042-.334.282-.553.239-.218.573-.218h3.166q.334 0 .573.218.24.219.282.553l.229 1.854q.208.125.458.271.25.145.458.27l1.729-.729q.313-.125.626-.021.312.105.479.396L18 7.208q.167.292.104.604-.062.313-.333.521l-1.459 1.125v1.084l1.459 1.125q.271.208.333.521.063.312-.104.604l-1.583 2.729q-.167.291-.479.396-.313.104-.626-.021l-1.729-.729q-.208.125-.458.271-.25.145-.458.27l-.229 1.854q-.042.334-.282.553-.239.218-.573.218ZM10 12.979q1.229 0 2.104-.875T12.979 10q0-1.229-.875-2.104T10 7.021q-1.229 0-2.104.875T7.021 10q0 1.229.875 2.104t2.104.875Zm0-1.75q-.5 0-.865-.364-.364-.365-.364-.865t.364-.865q.365-.364.865-.364t.865.364q.364.365.364.865t-.364.865q-.365.364-.865.364ZM10.021 10Zm-.854 6.583h1.666l.25-2.166q.605-.167 1.167-.5.562-.334 1.021-.792l2.021.854.833-1.375-1.771-1.354q.104-.292.146-.604.042-.313.042-.646 0-.292-.042-.594t-.125-.635l1.771-1.375-.834-1.375-2.02.875q-.48-.479-1.032-.802-.552-.323-1.156-.49l-.271-2.187H9.167l-.271 2.187q-.604.167-1.156.49-.552.323-1.011.781l-2.021-.854-.833 1.375 1.75 1.354q-.083.333-.125.646-.042.312-.042.604t.042.594q.042.302.125.635l-1.75 1.375.833 1.375 2.021-.854q.459.458 1.011.781.552.323 1.156.49Z"></path>
								</svg>
							</SidebarLink>
							<button
								className="mt-2 flex h-[40px] w-full items-center justify-center rounded-lg p-2 text-base tracking-wide text-white hover:bg-[#27272a]"
								title="Sign out"
							>
								<div className="flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										height="20"
										width="20"
										fill="currentColor"
										className="text-white"
									>
										<path d="M12.625 13.667q-.25-.25-.25-.615 0-.364.25-.614l1.563-1.563H8.396q-.354 0-.615-.26-.26-.261-.26-.615t.26-.615q.261-.26.615-.26h5.729l-1.521-1.542q-.229-.25-.229-.604t.25-.604q.25-.25.615-.25.364 0 .614.25l3.021 3.021q.146.146.208.302.063.156.063.323t-.063.323q-.062.156-.208.302l-3.042 3.042q-.25.25-.593.25-.344 0-.615-.271ZM4.25 17.5q-.729 0-1.24-.51-.51-.511-.51-1.24V4.25q0-.729.51-1.24.511-.51 1.24-.51h4.854q.354 0 .615.26.26.261.26.615t-.26.615q-.261.26-.615.26H4.25v11.5h4.854q.354 0 .615.26.26.261.26.615t-.26.615q-.261.26-.615.26Z"></path>
									</svg>
								</div>
							</button>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}
