import * as actionTypes from "./actionTypes";
import { getPosts } from "../../services";

export const getPostAction = (totalPages) => {
	return (dispatch) => {
		getPosts(totalPages)
			.then((response) => {
				if (response && response.status && response.status === 200) {
					dispatch({
						type: actionTypes.GET_POSTS,
						payload: response.data,
					});
				}
			})
			.catch((error) => {
				alert(
					"Error : Something went wrong in fetching POST API. Please try again later",
					error
				);
			});
	};
};

export const getSearchResultsAction = (searchKey) => {
	return (dispatch) => {
		dispatch({
			type: actionTypes.GET_SEARCH_RESULTS,
			payload: searchKey,
		});
	};
};

export const getPageChangeActions = (selectedPageNo) => {
	return (dispatch) => {
		dispatch({
			type: actionTypes.PAGE_CHANGE,
			payload: selectedPageNo,
		});
	};
};
