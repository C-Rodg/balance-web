import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

class LandingPage extends Component {
	componentDidMount() {
		this.listener = this.props.firebase.auth.onAuthStateChanged((authUser) => {
			console.log(authUser);
			authUser
				? this.props.history.push(ROUTES.HOME)
				: this.props.history.push(ROUTES.SIGN_IN);
		});
	}

	componentWillUnmount() {
		this.listener();
	}
	render() {
		return <div className="landing-page">Loading...</div>;
	}
}

export default withRouter(withFirebase(LandingPage));
