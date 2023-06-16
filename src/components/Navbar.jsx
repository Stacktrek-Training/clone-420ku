import NetflixLogo from "./navbar/NetflixLogo"
import NavigationMenu from "./navbar/NavigationMenu"
import SearchBar from "./navbar/SearchBar"
import NotificationIcon from "./navbar/Notification"
import './navbar/Navbar.css'
import './navbar/NavigationMenu.css'

export default function Navbar() {
    return (
        <div>

            <NetflixLogo />
            <NavigationMenu />
            <SearchBar />
            <NotificationIcon />


        </div>
    )
}