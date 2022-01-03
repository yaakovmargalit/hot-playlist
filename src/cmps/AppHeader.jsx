import { NavLink } from "react-router-dom";
import { SearchBar } from "./SearchBar";

export function AppHeader(props) {

    const toggleMode = () => {
        document.body.classList.toggle('light-mode')
    }
    return (
        <div className="app-header">
            <nav>
                <NavLink className='nav-link' exact to={'/hot-playlist'}>Home</NavLink>
                <NavLink className='nav-link' to={'/hot-playlist/recent-searches'}>Recent</NavLink>
                <NavLink className='nav-link' to={'/hot-playlist/about'}>About</NavLink>
            <div className="toggle-mode-btn" onClick={toggleMode}><span className="material-icons">
                light_mode
            </span></div>
            </nav>
            <SearchBar onSearch={props.onSearch} />
        </div>
    )
}
