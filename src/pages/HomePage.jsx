import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Route, Switch, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
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

    // Keep the list in the app store so that it is saved when switching between components
    const { results, page } = useSelector(state => state.resultsModule)
    const dispatch = useDispatch()
    const loc = useLocation()
    let history = useHistory();
    useEffect(() => {
        (async () => {
            if (!searchTerm) return
            try {
                history.push('/hot-playlist')
                await dispatch(loadResults(searchTerm))
                setSearchTerm(() => '')
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
        dispatch(setResultsPage()) //Updates the store on the current page
    }

    // Switches between list and grid and saves the selection
    const onChangeMode = (isList) => {
        setDisplayList(isList)
        storageService.store('display-mode', isList)
    }
    return (
        <div className="home-page ">
            <div className="container">
                <AppHeader onSearch={onSearch} />
                {/* Components for animating transitions between pages */}
                <TransitionGroup className='app-center'>
                    <CSSTransition timeout={200} classNames='fade' key={loc.key}>
                        <Switch location={loc} >
                            <Route component={ImageContainer} path={'/hot-playlist/player'} />
                            <Route component={RecentSearches} path={'/hot-playlist/recent-searches'} />
                            <Route component={AboutPage} path={'/hot-playlist/about'} />
                            <Route path={'/hot-playlist'}>
                               <ResultsList isListMode={isListMode} resultsList={resultsForList()} />
                            </Route>
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </div>
            <ListControls onNextResults={onNextResults} onChangeMode={onChangeMode} />
        </div>
    )
}
