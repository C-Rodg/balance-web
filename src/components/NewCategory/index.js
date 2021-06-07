import React, {useEffect, useMemo, useState} from 'react';
import { withAuthorization } from '../Session';
import { AUTHENTICATED_USER } from '../../constants/roles.js';
import Icon from '../Icons/individualIcon'
import Icons from '../Icons/index.js'
import BackButton from '../BackButton';
import './style.css';

function NewCategoryPage(props) {
	// state for categories
	const [categories, setCategories] = useState([])

	// state for input
	const [inputText, setInputText] = useState('')

	// state for selected icon
	const [selectedIcon, setSelectedIcon] = useState(null)

	// place current categories in state, to make sure no duplicates
	useEffect( () => {
		props.firebase.categoriesRef().on('value', (snapshot) => {
			const categoriesObject = snapshot.val();
			if (categoriesObject) {
				const categories = Object.keys(categoriesObject).map((key) => ({
					...categoriesObject[key],
					id: key,
				}));
				console.log(categories);
				setCategories(categories);
			}
		});
	}, [props.firebase])

	// display the categories
	const memoizedCategories = useMemo( () => categories.map( category => {
		return <p key={category.id}>{category.name}</p>
	}), [categories])

	// function for mapping the input to state
	const handleChange = (e) => {
		setInputText(e.target.value)
	}

	// display the selected icon
	const selectIcon = (icon) => {
		setSelectedIcon(<Icon name={icon} />)
	}

	return (
		<div className="new-category-page">
			<div className="nav">
				<title>New Category Page</title>
				<BackButton />
				<h1 className="title">New Category Page</h1>
			</div>
			<div className="currentSelection">
				<div>
					<h3>Icon: {selectedIcon}</h3>
				</div>
				<div>
					<h3>Title: {inputText}</h3>
				</div>
			</div>
			<div className="containerLeft">
				<div className="selectIconContainer">
					<h3>Select icon</h3>
					<div>
						<Icons selected={selectIcon}/>
					</div>
				</div>
				<div className="selectCatContainer">
					<h3>Set category name</h3>
					<input type="text" value={inputText} onChange={handleChange}/>
				</div>
			</div>
			<div className="containerRight">
				<div>List of current categories</div>
				{memoizedCategories}
			</div>
		</div>
	);
}

export default withAuthorization(AUTHENTICATED_USER)(NewCategoryPage);
