import "./scss/navbar.scss";

function Navbar()
{
    return(
        <div class="container-fluid">
        <div className="row navbar">
            <ul className="row navbar__ul">
                <li className="col-sm-3 navbar__li"><a className="navbar__item" href="##">Telefony</a></li>
                <li className="col-sm-3 navbar__li"><a className="navbar__item" href="##">Tablety</a></li>
                <li className="col-sm-3 navbar__li"><a className="navbar__item" href="##">Notebooky</a></li>
                <li className="col-sm-3 navbar__li"><a className="navbar__item" href="##">Konzole</a></li>
            </ul>
        </div>
    </div>
    );
}

export default Navbar;