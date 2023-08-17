'use client';

import { useEffect, useState } from 'react';

import SummaryCard from 'components/card/summary-card';
import CardLoader from 'components/loader/card';

import { formatCurrency } from 'lib/formatter';

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
				<CardLoader cards={3} />
			) : (
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5">
					<SummaryCard title="total" data={formatCurrency({ value: totalIncome, currency: 'INR', locale: 'en' })} />
					<SummaryCard title="expenses" data={formatCurrency({ value: totalBalance, currency: 'INR', locale: 'en' })} />
					<SummaryCard
						title="balance"
						data={formatCurrency({ value: totalSubscriptions, currency: 'INR', locale: 'en' })}
					/>
				</div>
			)}
		</>
	);
}
