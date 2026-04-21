const products = [
  {
	id : 1,
    imageUrl: "https://cdn.shopify.com/s/files/1/0551/0981/2291/files/red-eye-espresso_480x480.jpg",
    productName: "Espresso",
    productPrice: 2.1,
    productOriginalPrice: 3.2,
    productCategory: "Beverages"
  },
	{
	id : 2,
    imageUrl: "https://assets.beanbox.com/blog_images/AB7ud4YSE6nmOX0iGlgA.jpeg",
    productName: "Americano",
    productPrice: 3.1,
    productOriginalPrice: 3.8,
    productCategory: "Beverages"
  },
  
];
function Products(){
	return(
		<>
		<div className="m-5 d-flex gap-3">
			{products.map(product => (
			<figure key={product.id}>
				<img src={product.imageUrl} alt="" />
				<figcaption>
					{product.productName}
					<p className="price">${product.productPrice}<span>M.R.P<span>${product.productOriginalPrice}</span></span></p>
					<p className="category">{product.ProductCategory}</p>
					<button type="button" className="btn btn-add-to-cart">Add To cart</button>
				</figcaption>
			</figure>
			)
			)}
			</div>
		</>
	)
}
export default Products;