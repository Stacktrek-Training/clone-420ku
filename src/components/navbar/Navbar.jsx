import NetflixLogo from "./NetflixLogo";
import NavigationMenu from "./NavigationMenu";
import SearchBar from "./SearchBar";
import NotificationIcon from "./Notification";
import "./Navbar.css";
import "./NavigationMenu.css";

export default function Navbar() {
    return (
        <nav>
            <NetflixLogo />
            <NavigationMenu />
            <SearchBar />
            <NotificationIcon />
        </nav>
    );
}
