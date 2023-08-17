import { DatePickerProvider } from 'components/context/datepicker-provider';
import LayoutHeader from 'components/layout/header';

import Theme from './theme';

export default async function Page() {
	return (
		<>
			<LayoutHeader title="Settings" />

			<div className="mt-6 w-full overflow-x-auto p-4 pt-3">
				<div className="m-auto flex w-full max-w-2xl flex-col items-center space-y-6">
					<Theme />
				</div>
			</div>
		</>
	);
}
