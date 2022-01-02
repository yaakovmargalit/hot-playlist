import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ListControls } from "../cmps/ListControls";
import { ResultsList } from "../cmps/ResultsList";
import { SearchBar } from "../cmps/SearchBar";
import { searchService } from "../services/search.servcis";
import { loadResults, setResultsPage } from "../store/actions/resultsActions";

export function HomePage() {

    const [searchTerm, setSearchTerm] = useState('')
    const [isListMode, setDisplayList] = useState(false)
    const { results, page } = useSelector(state => state.resultsModule)
    const dispatch = useDispatch()

    useEffect(() => {
        (async () => {
            if (!searchTerm) return
            try {
                await dispatch(loadResults(searchTerm))
                resultsForList()
            } catch (err) {
                console.log(err);
            }
        })()
    }, [searchTerm])

    const onSearch = term => {
        setSearchTerm(() => term)
    }

    const resultsForList = () => {
        return results.slice(page, page + 6)
         
    }
    const onNextResults = () => {
        dispatch(setResultsPage())
    }
    const onChangeMode = (isList)=>{
        setDisplayList(isList)
    }
    return (
        <div className="home-page">
            <SearchBar onSearch={onSearch} />
            <ResultsList isListMode={isListMode} resultsList={resultsForList()} />
            <ListControls onNextResults={onNextResults} onChangeMode={onChangeMode} />
        </div>
    )
}
