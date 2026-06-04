import { useContext } from "react";
import { CartContext } from "./App";

function Cart(){
	const {cart, setCart} = useContext(CartContext)
	function removeFromCart(indexToRemove) {
		setCart(cart => {
		cart = cart.filter((product,index) => index !== indexToRemove)
		localStorage.setItem('cart', JSON.stringify(cart))
		return cart;
	}
	)
	}
	return (
		<>
		<h2 style={{margin: "5px"}}>Cart</h2>
		<div style={{display: 'flex', gap: '5px', margin: '10px'}}>
			{cart.map((product, index) => <figure key={product.id}>
				<img src={product.imageUrl} alt="" />
				<figcaption>
					{product.productName}
					<p className="price">${product.productPrice}<span>M.R.P<span>${product.productOriginalPrice}</span></span></p>
					<p className="category">{product.ProductCategory}</p>
					<button type="button" className="btn btn-add-to-cart" onClick={() => removeFromCart(index)}>Delete</button>
				</figcaption>
			</figure>
			)}
		</div>
		</>
	)
}
export default Cart;