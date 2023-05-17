import "./scss/productsRow.scss";
import Product from "./product";

function ProductRow(props)
{
    return(
        <div className="container-fluid">
            <div className="row my-2 mx-2 productRow">
                <Product nazev={props.nazevA} popis={props.popisA}/>
                <Product nazev={props.nazevB} popis={props.popisB}/>
                <Product nazev={props.nazevC} popis={props.popisC}/>
            </div>
        </div>
    );
}

export default ProductRow;