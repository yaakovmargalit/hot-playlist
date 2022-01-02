import { NavLink } from "react-router-dom";
import { SearchBar } from "./SearchBar";

export function AppHeader(props) {
    return (
        <div className="app-header">
            <nav>
                <NavLink className='nav-link' exact to={'/'}>Home</NavLink>
                <NavLink className='nav-link' to={'/recent-searches'}>Recent</NavLink>
                <NavLink className='nav-link' to={'/about'}>About</NavLink>
            </nav>
            <SearchBar onSearch={props.onSearch} />
        </div>
    )
}
