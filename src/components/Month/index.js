import { withAuthorization } from '../Session';
import { AUTHENTICATED_USER } from '../../constants/roles.js';
import BackButton from '../BackButton';

function MonthPage() {
	return (
		<div className="month-page">
			<h1>Month Page</h1>
			<BackButton />
		</div>
	);
}

export default withAuthorization(AUTHENTICATED_USER)(MonthPage);
