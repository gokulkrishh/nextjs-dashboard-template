import { DatePickerProvider } from 'components/context/datepicker-provider';
import LayoutHeader from 'components/layout/header';

import Summary from './summary';

export default async function Page() {
	return (
		<>
			<LayoutHeader title="Page 2" />
			<div className="p-4 pt-3">
				<Summary />
				<h2 className="mb-4 mt-4 font-semibold text-primary dark:text-white">Reports</h2>
				<div className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-2"></div>
			</div>
		</>
	);
}
