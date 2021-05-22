import { withAuthorization } from '../Session';
import { AUTHENTICATED_USER } from '../../constants/roles.js';

function BudgetsPage() {
	return <div className="budgets-page">BudgetsPage</div>;
}

export default withAuthorization(AUTHENTICATED_USER)(BudgetsPage);
