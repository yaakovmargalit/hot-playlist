import { NavLink } from "react-router-dom";
import { SearchBar } from "./SearchBar";

export function AppHeader(props) {
    return (
        <div className="app-header">
            <nav>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/recent-searches'}>Recent</NavLink>
            </nav>
            <SearchBar onSearch={props.onSearch} />
        </div>
    )
}
