import { withAuthorization } from '../Session';
import { AUTHENTICATED_USER } from '../../constants/roles.js';

function MonthPage() {
	return <div className="month-page">MonthPage</div>;
}

export default withAuthorization(AUTHENTICATED_USER)(MonthPage);
