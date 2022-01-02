const INITIAL_STATE = {
    results: [],
    page: 0
}

export function resultsReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_RESULTS':
            return {
                ...state,
                results: [...action.res]
            };
        case 'SET_PAGE':
            return {
                ...state,
                page: action.page
            };
        default:
            return state;
    }

}