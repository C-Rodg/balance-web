import { useHistory } from 'react-router-dom';

function BackButton() {
	let history = useHistory();

	function handleClick() {
		history.goBack();
	}

	return (
		<button type="button" onClick={handleClick}>
			BACK
		</button>
	);
}

export default BackButton;
