function Hero() {
	return (
		<>
		<div className="w-100 position-relative" style={{'height' :'80vh', 'overflow' : 'hidden'}}>
			<div className="position-absolute top-50 start-50 translate-middle text-center text-white">
				<h3 className="display-2 mb-3">Cafe - Instant Hype</h3>
				<p className="fs-3">Where coffee Craving satisfied</p>
			</div>
			<img 
			src="https://yorkemporium.co.uk/cdn/shop/articles/AdobeStock_315403482_1_b207df01-70f2-407f-ab1f-64f8b66bb010.jpg"
				alt="coffee Image" 
				className="w-100 h-100 object-fit-cover" style={{objectPosition : "right 20%"}}/>
		</div>
		</>
	)
}
export {Hero};