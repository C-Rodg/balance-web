import { withAuthorization } from '../Session';
import { AUTHENTICATED_USER } from '../../constants/roles.js';

function NewBudgetPage() {
	return <div className="new-budget-page">NewBudgetPage</div>;
}

export default withAuthorization(AUTHENTICATED_USER)(NewBudgetPage);
