//ES6- Covers: Template literals, Destructuring, Spread, Rest params,

// Enhanced object literals, Short-circuit evaluation

// -------------------- 1) Sample Data --------------------

const customer = {

  name: "Anu",

  city: "Chennai",
  email : "anu@gmail.com",
  isPremium: true,

  coupon : "ADCB12"

};

const cart = [

  { item: "Burger", price: 120, qty: 2 },

  { item: "Pizza", price: 250, qty: 1 },

  { item: "Fries", price: 80, qty: 3 },

];

// console.log(customer.name)

// object destructuring -{},arrays -[]

//  const [varName]= array or obj

const {name,city,isPremium}=customer

console.log('Name:'+name,'city:'+city)

//template literals  - ``

// 3 ways 

console.log(`Name: ${name}

City:${city}

             `)

//spread operator - copy , 2 combine 

// spread - func arguments

const updatedCart=[...cart,{item:"ice cream",price:80,qty:2}]

console.log(updatedCart)

//rest operator -denoted ... ,this is used in functional params 

// when u dont know how many no of arguments u r getting ,and returns params  in arrays ,accepts any data type value 

function totalAmount(...items){

     console.log('rest items',items)

     return items.reduce((total,item)=>total+item.price * item.qty,0)

}

const finalAmount=totalAmount(...updatedCart)

console.log(finalAmount)

// short cut evaluation

// discount -> isPremium and totalAmount >500 =>10%

// if(isPremium &&  finalAmount>=500){

//    console.log(  finalAmount *0.1)

// }else{

//    console.log('discount is not applied')

// }

const discount=isPremium && finalAmount>=500 && finalAmount *0.1 

console.log(discount)

// delivery charge - 70

const deliveryCalculation=finalAmount>500 && 70

console.log(deliveryCalculation)


//object literals 

let order={
    name,

    city,

    isPremium,

    OrderDate:new Date(),

    Discount:discount || 0,

    DeliveryCharges:deliveryCalculation || 0,

}
//coupon
const coupons =  [ "ADCB12" , "DFCS21"]
const couponCodeDiscountPercentage = {ADCB12 : "10", DFCS21 : "15"}
const gst = 12
function orderTotal() {
	const gstAmount = (gst/100) * finalAmount
	const couponCodeDiscount = coupons.includes(customer.coupon) && (couponCodeDiscountPercentage[customer.coupon]/100) * finalAmount
	return {
		couponCodeDiscount : couponCodeDiscount || 0,
		gstAmount,
		orderTotalAmount: (finalAmount + gst + order.DeliveryCharges) - ((couponCodeDiscount || 0) + order.Discount)
	}
}
const priceDetailsOrder = orderTotal()
order = {...order,...priceDetailsOrder}
console.log(order)
document.getElementsByClassName("name")[0].textContent = order.name
document.getElementsByClassName("email")[0].textContent = customer.email
document.getElementsByClassName("city")[0].textContent = order.city
document.getElementsByClassName("discount")[0].textContent = order.Discount
document.getElementsByClassName("copuon-code-discount")[0].textContent = order.couponCodeDiscount
document.getElementsByClassName("delivery-charges")[0].textContent = order.DeliveryCharges
document.getElementsByClassName("gst-amount")[0].textContent = order.gstAmount
document.getElementsByClassName("order-total-amount")[0].textContent = order.orderTotalAmount
