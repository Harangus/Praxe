import "./scss/header.scss";

function Header(props)
{
    return(
        <div className="container-fluid">
            <div className="row header">
                <div className="col-sm-6 header__firstColumn">
                    <h1 className="header__title">{props.content}</h1>
                    <span className="material-symbols-outlined header__icon"> laptop_windows</span>
                </div>

                <div className="col-sm-4 header__secondColumn">
                    <span className="material-symbols-outlined">search</span>
                    <input type="text" className="header__searchbar" value="Vyhledávání"/>
                </div>

                <div className="col-sm-2 header__thirdColumn">
                    <span className="material-symbols-outlined header__icon"> shopping_basket</span>
                    <span className="material-symbols-outlined header__icon"> account_circle </span>
                </div>
            </div>
        </div>
    );
}

export default Header;