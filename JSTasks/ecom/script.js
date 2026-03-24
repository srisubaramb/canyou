const productDetails = [
	{id:'1',name:'Nike mens Court vision lo next sneakers', category: 'sneakers', price:4.6,originalPrice:5.7,imageLink:'https://m.media-amazon.com/images/I/613l8ZN8TfL._AC_UL480_FMwebp_QL65_.jpg'},
	{id:'2',name:'Mens Ironman Running Shoes',category:'running',price:3.4,originalPrice:4.5,imageLink:'https://m.media-amazon.com/images/I/71biQP-kH1L._AC_UL480_FMwebp_QL65_.jpg'},
	{id:'3',name:'Men Lace Up Basketball shoe',category:'sports',price:12.1,originalPrice:14,imageLink:'https://m.media-amazon.com/images/I/71V4GGv1edL._AC_UL480_FMwebp_QL65_.jpg'},
	{id:'4',name:'Lace up sneaker shoes',category:'sneakers',price:75,originalPrice:77,imageLink:'https://m.media-amazon.com/images/I/6157WaPyAyL._AC_UL480_FMwebp_QL65_.jpg'},
	{id:'5',name:'cloudridge 1 sneakers',category:'sneakers',price:45,originalPrice:44,imageLink:'https://m.media-amazon.com/images/I/617wY+KhL6L._AC_UL480_FMwebp_QL65_.jpg'}
]
const priceRangeValue = document.getElementsByClassName('price-range-value')[0]
const priceInput = document.querySelector('#price-range')
//while initial loading update the price range value
priceRangeValue.innerHTML = `${priceInput.value}`
//update the price range value listining for the input
document.addEventListener('input', function(e) {
	priceRangeValue.innerHTML = `${priceInput.value}`
})
const productCategories = ['sneakers','running','sports']
const renderProducts = (data) => {
	const productPanel = document.getElementsByClassName('product-panel')[0]
	let htmlOfProduct = ''
	data.forEach(product => htmlOfProduct += (`<figure>
				<img src="${product.imageLink}" alt="${product.name}" >
				<figcaption>
					${product.name}
					<p class="price">$${product.price}<span>M.R.P<span>$${product.originalPrice}</span></span></p>
					<p class="category">${product.category}</p>
					<button type="button" class="btn btn-add-to-cart" onclick="addToCart(${product})">Add To cart</button>
				</figcaption>
			</figure>`))
	productPanel.innerHTML = htmlOfProduct
}
renderProducts(productDetails)
const renderCategories = (data) => {
	const formCategories = document.getElementsByClassName('form-categories')[0]
	let htmlText = '';
	data.forEach(category => htmlText += `
		<input type="checkbox" id="${category}" />
				<label for="${category}">${category}</label><br>`)
	formCategories.innerHTML = htmlText
}
renderCategories(productCategories)

document.querySelector('#filter-form').addEventListener('submit', function(e) {
	e.preventDefault()
	let checkedBoxIds = e.target.querySelectorAll("input[type='checkbox']:checked")
	checkedBoxIds = [...checkedBoxIds]
	checkedBoxIds = checkedBoxIds.map(element => element.id)
	const price = Number(e.target.elements.price.value)
	let data = filterBasedOnCategories(checkedBoxIds)
	data = filterBasedOnPrice(data, price)
	renderProducts(data)
})

const filterBasedOnCategories = (data) => {
	if(data != '') {
		const filteredData = productDetails.filter(product => data.includes(product.category))
		return filteredData
	} else {
		return productDetails
	}
}
const filterBasedOnPrice = (data, price) => {
	if(price != 0) {
		const filteredData = data.filter(product => product.price <= price)
		return filteredData
	} else {
		return data
	}
}

const addToCart = (product) => {
	console.log("order called")
	console.log(product)
}