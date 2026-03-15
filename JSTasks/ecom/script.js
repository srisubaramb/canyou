const productDetails = [
	{id:'1',name:'Nike mens Court vision lo next sneakers', category: 'sneakers', price:4.6,originalPrice:5.7,imageLink:'https://m.media-amazon.com/images/I/613l8ZN8TfL._AC_UL480_FMwebp_QL65_.jpg'},
	{id:'2',name:'Mens Ironman Running Shoes',category:'running',price:3.4,originalPrice:7.8,imageLink:'https://m.media-amazon.com/images/I/71biQP-kH1L._AC_UL480_FMwebp_QL65_.jpg'},
	{id:'3',name:'Men Lace Up Basketball shoe',category:'sports',price:3.4,originalPrice:7.8,imageLink:'https://m.media-amazon.com/images/I/71V4GGv1edL._AC_UL480_FMwebp_QL65_.jpg'},
	{id:'4',name:'Lace up sneaker shoes',category:'sneakers',price:3.4,originalPrice:7.8,imageLink:'https://m.media-amazon.com/images/I/6157WaPyAyL._AC_UL480_FMwebp_QL65_.jpg'},
	{id:'5',name:'cloudridge 1 sneakers',category:'sneakers',price:3.4,originalPrice:7.8,imageLink:'https://m.media-amazon.com/images/I/617wY+KhL6L._AC_UL480_FMwebp_QL65_.jpg'}
]
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
					<button type="button" class="btn btn-add-to-cart">Add To cart</button>
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
	filterBasedOnCategories(checkedBoxIds)
})
const filterBasedOnCategories = (data) => {
	if(data != '') {
		const filteredData = productDetails.filter(product => data.includes(product.category))
		renderProducts(filteredData)
	} else {
		renderProducts(productDetails)
	}
}