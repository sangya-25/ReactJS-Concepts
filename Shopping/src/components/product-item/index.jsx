function ProductTile({product}){
    return(
        <div style={{border:'3px solid cornflowerblue' , borderRadius:'10px'}} className="border p-4 rounded shadow">
            <img src={product.thumbnail} alt={product.title} className="h-40 w-full object-cover mb-2" />
            <h3 className="text-lg text-black font-semibold">{product.title}</h3>
            <p className="text-sm text-gray-600">${product.price}</p>
        </div>
    );
}
export default ProductTile;