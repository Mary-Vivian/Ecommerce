const ProductsCard=({image,title,price,categories})=>{
    return(
        <div>
            <img src={image} alt={`${title} profile`}/>
            <h2>{price}</h2>
            <h2>{categories}</h2>

        </div>
    );
};
export default ProductsCard;