import React, { useEffect, useState } from "react"
import { useHistory} from 'react-router-dom';

import { Link } from 'react-router-dom';

import { withAuthorization } from '../Session';
import { AUTHENTICATED_USER } from '../../constants/roles.js';
import * as ROUTES from '../../constants/routes';
import BackButton from '../BackButton';

function SelectCategoryPage(props) {
	// instantiate history
	let history = useHistory();

	// state
	const [categories, setCategories] = useState([])
	const [categoryDisplayList, setDisplayCategoryList] = useState([])


	// grab the cateory data
	useEffect( () => {
		props.firebase.categoriesRef().on('value', (snapshot) => {
			const categoriesObject = snapshot.val();
			if (categoriesObject) {
				const categories = Object.keys(categoriesObject).map((key) => ({
					...categoriesObject[key],
					id: key,
				}));
				setCategories(categories);
			}
		});
	}, [])

	// function to add category to history stack
	const handleAddCategory = (e, cat) => {

		// update the histories state
		history.replace({ state: {category: cat}})

		// go back
		history.goBack()

	}

	// map the categories to page
	useEffect( () => {
		// check if there are any categories
		if (categories.length > 0) {
			setDisplayCategoryList(categories.map( (cat, catId) => {
				return <h3 
						key={catId} 
						onClick={(e) => handleAddCategory(e, cat)} 
						style={{cursor: "pointer"}}>
							{cat.name}
						</h3>
			}))
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [categories])

	return (
		<div className="select-category-page">
			<h1>Select Category Page</h1>
			<Link to={ROUTES.NEW_CATEGORY}>New Category Page</Link>
			<BackButton />
			<div>List of existing categories</div>
			{categoryDisplayList}
		</div>
	);
}

export default withAuthorization(AUTHENTICATED_USER)(SelectCategoryPage);
