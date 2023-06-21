import './Product.css';

const Product = (props) => {
    console.log(props.product);
    const {name, img, seller, price, ratings} = props.product;
    return (
        <div className='product'>
            <div className='product-info'>
                <img src={img} alt="" />
                <h4>{name}</h4>
                <p>Price:{price}</p>
                <div>
                    <p>Manufacturer: {seller}</p>
                    <p>Rating: {ratings} Stars</p>
                </div>
            </div>
            <button className="btn-cart">Add to Cart</button>
        </div>
    );
};

export default Product;