import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { storageService } from "../services/storageService"
import { loadResults } from "../store/actions/resultsActions"

export function RecentSearches() {
    const dispatch = useDispatch()
    let history = useHistory();

    const recentSearches = storageService.load('recent-searches')||[]
    // A new search for the item begins
    const onRecentClick = (term) => {
        try {
            (async () => {
                if (!term) return
                try {
                    await dispatch(loadResults(term))
                    history.push('/hot-playlist')
                } catch (err) {
                    console.log(err);
                }
            })()
        } catch (error) {

        }
    }
    return (
        <div className="recent-searches">
            <h3>Recent Searches</h3>
            {recentSearches.length ? recentSearches.map((item, idx) =>
                <div key={item + idx}>
                    <p className="recent-searches-item" onClick={() => onRecentClick(item)} >{item}</p>
                    <hr></hr>
                </div>):<div className="empty-msg">Here will be your recent searches</div>}
        </div>
    )
}
