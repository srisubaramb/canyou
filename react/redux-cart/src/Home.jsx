import {useDispatch} from 'react-redux'
import { addToCart } from './cartSlice'

const products = [
	{id:'1',name:'Nike mens Court vision lo next sneakers', category: 'sneakers', price:4.6,originalPrice:5.7,imageLink:'https://m.media-amazon.com/images/I/613l8ZN8TfL._AC_UL480_FMwebp_QL65_.jpg'},
	{id:'2',name:'Mens Ironman Running Shoes',category:'running',price:3.4,originalPrice:4.5,imageLink:'https://m.media-amazon.com/images/I/71biQP-kH1L._AC_UL480_FMwebp_QL65_.jpg'},
	{id:'3',name:'Men Lace Up Basketball shoe',category:'sports',price:12.1,originalPrice:14,imageLink:'https://m.media-amazon.com/images/I/71V4GGv1edL._AC_UL480_FMwebp_QL65_.jpg'},
	{id:'4',name:'Lace up sneaker shoes',category:'sneakers',price:75,originalPrice:77,imageLink:'https://m.media-amazon.com/images/I/6157WaPyAyL._AC_UL480_FMwebp_QL65_.jpg'},
	{id:'5',name:'cloudridge 1 sneakers',category:'sneakers',price:45,originalPrice:44,imageLink:'https://m.media-amazon.com/images/I/617wY+KhL6L._AC_UL480_FMwebp_QL65_.jpg'}
]
const Home = () => {
	const dispatch = useDispatch()
	return (
	<div className="products-display">
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
	</div>
	)
}
export default Home;