import "./scss/product.scss";

function Product(props)
{
    const {nazev = "Nepojmenovaný produkt"} = props;
    const {popis = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dicta consequatur voluptas iste temporibus, quisquam, quam maxime dignissimos incidunt explicabo blanditiis porro. Voluptatum iste ratione eius neque dignissimos nobis aspernatur!"} = props;

    return(
        <div className="col-md-4 p-3 product">
                <img className="img-thumbnail product__image" alt="obrazek" src={require("./empty.jpg")}/>
                <div className="row">
                    <div className="col-md-12 product__name"><h1 class="product__name">{nazev}</h1></div>
                </div>
                <div className="row">
                    <div className="col-md-12 product__info">
                        <text class="product__description">{popis}</text>
                    </div>
                </div>
        </div>
    );
}

export default Product;