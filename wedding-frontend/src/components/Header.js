import {Link} from "react-router-dom";
function Header() {
    return(
        <nav class="sticky-top frosted-glass flex f-center">
            <div class="f-left xxl-txt fancy-font">
                <Link to="/home">
                    <span className="josef" id="j">Josef</span> + <span className="rose" id="r">Rose</span>
                </Link>
            </div>
            <div className="f-right lg-txt mobile-hide">
                <Link to="/rsvp">RSVP</Link>
                <Link to="/photos">Photos</Link>
                <Link to="/registry">Registry</Link>
                <Link to="/register">SignUp</Link>
            </div>
            <div className="f-right lg-txt mobile-show">
            </div>
        </nav>
    )
}

export default Header