import { Link } from 'react-router-dom';

import { withAuthorization } from '../Session';
import SignOutButton from '../SignOut';
import { AUTHENTICATED_USER } from '../../constants/roles.js';
import * as ROUTES from '../../constants/routes';

function HomePage() {
	return (
		<div className="home-page">
			<div>Home Page</div>
			<SignOutButton />
			<Link to={ROUTES.NEW_EXPENSE}>New Expense Page</Link>
			<Link to={ROUTES.MONTH}>Month Page</Link>
			<Link to={ROUTES.SETTINGS}>Settings Page</Link>
			<Link to={ROUTES.BUDGETS}>List Budgets Page</Link>
			<div>
				<div>Topbar - Settings button, Balance text, Budgets button</div>
				<div>Year, Prev Month button, Month button, New Month button</div>
				<div>
					<div>Today's expenses text</div>
					<div>
						<div>List</div>
						<div>Icon, Title, Amount, swipeable edit/delete</div>
					</div>
					<div>Total amount, Total $$$</div>
				</div>
				<div>New expense button</div>
			</div>
		</div>
	);
}

export default withAuthorization(AUTHENTICATED_USER)(HomePage);
