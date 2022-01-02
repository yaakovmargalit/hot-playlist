import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ResultsList } from "../cmps/ResultsList";
import { SearchBar } from "../cmps/SearchBar";
import { searchService } from "../services/search.servcis";
import { loadResults } from "../store/actions/resultsActions";

export function HomePage() {

    const [searchTerm, setSearchTerm] = useState('')
    const [resultsList, setResultsList] = useState([])

    const { results } = useSelector(state => state.resultsModule)
    const dispatch = useDispatch()

    useEffect(() => {
        (async () => {
            if (!searchTerm) return
            try {
                dispatch(loadResults(searchTerm))
            } catch (err) {
                console.log(err);
            }
        })()
    }, [searchTerm])

    const onSearch = term => {
        setSearchTerm(() => term)
    }

    return (
        <div className="home-page">
            <SearchBar onSearch={onSearch} />
            <ResultsList resultsList={results} />
        </div>
    )
}
