'use client';

import { useEffect, useState } from 'react';

import { Banknote, Briefcase, MoveDownRight, MoveUpRight, PiggyBank, PlayIcon, Wallet2 } from 'lucide-react';

import CardLoader from 'components/loader/card';
import { Badge } from 'components/ui/badge';

import { formatCurrency } from 'lib/formatter';
import { cn } from 'lib/utils';

import SummaryCard from '../../components/card/summary-card';

export default function Summary() {
	const [loader, setLoader] = useState(true);
	const totalExpenses = 10000;
	const totalIncome = 50000;
	const totalInvesments = 15000;
	const totalSubscriptions = 2000;
	const totalSpent = totalExpenses + totalInvesments + totalSubscriptions;
	const totalBalance = totalIncome - totalSpent;

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoader(false);
		}, 1000);
		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			<h2 className="mb-4 font-semibold text-primary dark:text-white">Summary</h2>
			{loader ? (
				<CardLoader cards={5} />
			) : (
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5">
					<SummaryCard
						icon={Briefcase}
						title="total income"
						data={formatCurrency({ value: totalIncome, currency: 'INR', locale: 'en' })}
					/>
					<SummaryCard
						icon={Wallet2}
						title="available balance"
						data={formatCurrency({ value: totalBalance, currency: 'INR', locale: 'en' })}
					/>
					<SummaryCard
						icon={Banknote}
						title="total spent"
						tooltip="Total of expenses + investments + subscriptions"
						data={formatCurrency({ value: totalSpent, currency: 'INR', locale: 'en' })}
					/>
					<SummaryCard
						icon={PiggyBank}
						title="total investment"
						data={formatCurrency({ value: totalInvesments, currency: 'INR', locale: 'en' })}
					/>
					<SummaryCard
						icon={PlayIcon}
						title="total subscriptions"
						data={formatCurrency({ value: totalSubscriptions, currency: 'INR', locale: 'en' })}
					/>
				</div>
			)}
		</>
	);
}
