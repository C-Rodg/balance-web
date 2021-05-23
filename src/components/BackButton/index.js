import { useHistory} from 'react-router-dom';

function BackButton() {
	// instantiate the react dom classes
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
