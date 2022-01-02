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