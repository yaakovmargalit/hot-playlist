const INITIAL_STATE = {
    results: [],
    term: null
}

export function resultsReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case 'SET_RESULTS':
            return {
                ...state,
                results: [...action.res]
            };
        default:
            return state;
    }

}