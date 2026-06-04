import { useEffect } from "react";
import { useSelector } from "react-redux";
let products;
function Cart() {
	products = useSelector(store => store.cartData.cart)
	console.log(products)
	return(
		<main>
			<h2>My orders</h2>
			{products.map((product,index) => <figure key={index}>
							<img src={product.imageLink} alt={product.name} />
							<figcaption>
								{product.name}
								<p className="price">${product.price}<span>M.R.P<span>${product.originalPrice}</span></span></p>
								<p className="category">{product.category}</p>
								<button type="button" className="btn btn-add-to-cart" onClick= {() => {dispatch(addToCart(product))}}>Add To cart</button>
							</figcaption>
						</figure> 
				)}
		</main>
	)
}
export default Cart;