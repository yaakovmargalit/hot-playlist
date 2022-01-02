import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Route, Switch, useLocation } from "react-router-dom";
import { AppHeader } from "../cmps/AppHeader";
import { ListControls } from "../cmps/ListControls";
import { ResultsList } from "../cmps/ResultsList";
import { SearchBar } from "../cmps/SearchBar";
import { searchService } from "../services/search.servcis";
import { storageService } from "../services/storageService";
import { loadResults, setResultsPage } from "../store/actions/resultsActions";
import { ImageContainer } from "./ImageContainer";
import { RecentSearches } from "./RecentSearches";

export function HomePage() {

    const [searchTerm, setSearchTerm] = useState('')
    const [isListMode, setDisplayList] = useState(storageService.load('display-mode',true))
    const { results, page } = useSelector(state => state.resultsModule)
    const dispatch = useDispatch()
const loc = useLocation()
console.log(loc);
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
        storageService.store('display-mode',isList)
    }
    return (
        <div className="home-page ">
        <div className="container">
        <AppHeader onSearch={onSearch} />
        <Switch>
        <Route component={RecentSearches} path={'/recent-searches'}/>
        <Route component={ImageContainer} path={'/player'}/>
        </Switch>
           {loc.pathname==='/'&& <ResultsList isListMode={isListMode} resultsList={resultsForList()} />}
        </div>
            <ListControls onNextResults={onNextResults} onChangeMode={onChangeMode} />
        </div>
    )
}
