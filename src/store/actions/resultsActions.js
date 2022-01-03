import { searchService } from "../../services/search.servcis";

export function loadResults(term) {
    return async (dispatch) => {
        try {
            const res = await searchService.getPlalist(term)
            searchService.saveRecentSearches(term)
            dispatch({ type: 'SET_RESULTS', res })
        } catch (err) {
            console.log(err);
        }
    }
}
// Updating the current page. 
// And back to the beginning if we have reached the end of the list
export function setResultsPage() {
    return (dispatch, getState) => {
        var { results, page } = getState().resultsModule
        page = (results.length - page < 6) ? 0 : page + 6
        dispatch({ type: 'SET_PAGE', page })
    }
}