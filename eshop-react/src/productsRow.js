import "./scss/productsRow.scss";
import Product from "./product";

function ProductRow(props)
{
    return(
        <div className="container-fluid">
            <div className="row my-2 mx-5 productRow">
                <Product nazev={props.nazevA} popis={props.popisA} image={props.imageA}/>
                <Product nazev={props.nazevB} popis={props.popisB} image={props.imageB}/>
                <Product nazev={props.nazevC} popis={props.popisC} image={props.imageC}/>
            </div>
        </div>
    );
}

export default ProductRow;