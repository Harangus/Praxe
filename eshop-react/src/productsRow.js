import "./scss/productsRow.scss";
import Product from "./product";

function ProductRow(props)
{
    return(
        <div className="container-fluid">
            <div className="row my-2 mx-2 productRow">
                <Product nazev={props.nazevA}/>
                <Product nazev={props.nazevB}/>
                <Product nazev={props.nazevC}/>
            </div>
        </div>
    );
}

export default ProductRow;