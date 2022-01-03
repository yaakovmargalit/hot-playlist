import { NavLink } from "react-router-dom";
import { SearchBar } from "./SearchBar";

export function AppHeader(props) {
    return (
        <div className="app-header">
            <nav>
                <NavLink className='nav-link' exact to={'/hot-playlist'}>Home</NavLink>
                <NavLink className='nav-link' to={'/hot-playlist/recent-searches'}>Recent</NavLink>
                <NavLink className='nav-link' to={'/hot-playlist/about'}>About</NavLink>
            </nav>
            <SearchBar onSearch={props.onSearch} />
        </div>
    )
}
