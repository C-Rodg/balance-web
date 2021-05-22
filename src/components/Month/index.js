import { Link } from 'react-router-dom';

import { withAuthorization } from '../Session';
import { AUTHENTICATED_USER } from '../../constants/roles.js';
import * as ROUTES from '../../constants/routes';

function MonthPage() {
	return (
		<div className="month-page">
			<h1>Month Page</h1>
			<Link to={ROUTES.HOME}>Return Home Page</Link>
		</div>
	);
}

export default withAuthorization(AUTHENTICATED_USER)(MonthPage);
