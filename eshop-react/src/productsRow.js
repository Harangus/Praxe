import "./scss/productsRow.scss";
import Product from "./product";

function ProductRow()
{
    return(
        <div className="container-fluid">
            <div className="row my-2 mx-2 productRow">
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    );
}

export default ProductRow;