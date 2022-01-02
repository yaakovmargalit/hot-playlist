import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Route, Switch, useLocation } from "react-router-dom";
import { AppHeader } from "../cmps/AppHeader";
import { ListControls } from "../cmps/ListControls";
import { ResultsList } from "../cmps/ResultsList";
import { SearchBar } from "../cmps/SearchBar";
import { searchService } from "../services/search.servcis";
import { storageService } from "../services/storageService";
import { loadResults, setResultsPage } from "../store/actions/resultsActions";
import { AboutPage } from "./AboutPage";
import { ImageContainer } from "./ImageContainer";
import { RecentSearches } from "./RecentSearches";

export function HomePage() {

    const [searchTerm, setSearchTerm] = useState('')
    const [isListMode, setDisplayList] = useState(storageService.load('display-mode', true))
    const { results, page } = useSelector(state => state.resultsModule)
    const dispatch = useDispatch()
    const loc = useLocation()
    let history = useHistory();
    useEffect(() => {
        (async () => {
            if (!searchTerm) return
            try {
                history.push('/')
                await dispatch(loadResults(searchTerm))
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
    const onChangeMode = (isList) => {
        setDisplayList(isList)
        storageService.store('display-mode', isList)
    }
    return (
        <div className="home-page ">
            <div className="container">
                <AppHeader onSearch={onSearch} />
                <Switch>
                    <Route component={RecentSearches} path={'/recent-searches'} />
                    <Route component={ImageContainer} path={'/player'} />
                    <Route component={AboutPage} path={'/about'} />
                </Switch>
                {(loc.pathname === '/' || loc.pathname === '/hot-playlist') &&
                    (results.length) ? <ResultsList isListMode={isListMode} resultsList={resultsForList()} />
                    : loc.pathname === '/' ? <div className="empty-msg">Search something to play ...</div> : ''}
            </div>
            <ListControls onNextResults={onNextResults} onChangeMode={onChangeMode} />
        </div>
    )
}
