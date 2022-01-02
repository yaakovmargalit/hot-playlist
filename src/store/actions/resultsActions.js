import { searchService } from "../../services/search.servcis";

export function loadResults(term) {
    return async (dispatch) => {
        // const { term } = getState().resultsModule
        try {
            const res = await searchService.getPlalist(term)
            dispatch({ type: 'SET_RESULTS', res })
        } catch (err) {
            console.log(err);
        }
    }
}
export function setResultsPage() {
    return (dispatch, getState) => {
        var { results, page } = getState().resultsModule
        page = (results.length - page < 6) ? 0 : page + 6
        dispatch({ type: 'SET_PAGE', page })
    }
}