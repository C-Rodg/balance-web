import { Link } from 'react-router-dom';

import { withAuthorization } from '../Session';
import { AUTHENTICATED_USER } from '../../constants/roles.js';
import * as ROUTES from '../../constants/routes';

function NewExpensePage() {
	return (
		<div className="new-expense-page">
			<h1>New Expense Page</h1>
			<Link to={ROUTES.SELECT_CATEGORY}>Select Category Page</Link>
			<Link to={ROUTES.HOME}>Return Home Page</Link>
			<div>
				<div>Topbar - back, add expense text</div>
				<div>
					icon of category, choose/current category button, total budget is XXX
					text
				</div>
				<div>
					<div>Calculator</div>
					<div>input for amount</div>
				</div>
			</div>
		</div>
	);
}

export default withAuthorization(AUTHENTICATED_USER)(NewExpensePage);
