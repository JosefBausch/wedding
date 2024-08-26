import {Link} from "react-router-dom";
import "./scss/Footer.scss";
function Footer() {
    return(
    <footer>
        <div class="full-height lg-txt">
            <ul>
                <li>
                    <Link to="/rsvp">RSVP</Link>
                </li>
                <li>
                    <Link to="/photos">Photos</Link>
                </li>
                <li>
                    <Link to="/registry">Registry</Link>
                </li>
            </ul>
        </div>
    </footer>
    )
}

export default Footer