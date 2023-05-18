import "./scss/navigation.scss";

function Navigation()
{
    return(
        <div className="container-fluid">
            <div className="row tlacitka">
            <div className="col-sm-1"></div>
            <div className="col-sm-5"><button className="btn btn-primary btn-lg">Zpět</button></div>
            <div className="col-sm-5"><button className="btn btn-primary btn-lg">Další</button></div>
            </div>
        </div>
    );
}

export default Navigation;