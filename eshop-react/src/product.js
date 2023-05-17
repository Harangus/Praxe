import "./scss/product.scss";

function Product()
{
    return(
        <div className="col-md-4 product">
                <img className="img-thumbnail product__image" alt="obrazek" src={require("./empty.jpg")}/>
                <div className="row">
                    <div className="col-md-12 product__name"><h1 class="product__name">Název</h1></div>
                </div>
                <div className="row">
                    <div className="col-md-12 product__info"><text class="product__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dicta consequatur voluptas iste temporibus, quisquam, quam maxime dignissimos incidunt explicabo blanditiis porro. Voluptatum iste ratione eius neque dignissimos nobis aspernatur!</text></div>
                </div>
        </div>
    );
}

export default Product;