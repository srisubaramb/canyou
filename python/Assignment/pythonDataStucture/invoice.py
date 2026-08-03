input_product_details = input("Enter product details: ").strip()
def format_user_input():
	cleaned_input = input_product_details.split(" ")
	return cleaned_input
input_product_details = format_user_input()
products = {}
total_products = 0
total_price = 0
#Creating the dictionary
for i in range(0,len(input_product_details), 3):
	product = {}
	product["name"] = input_product_details[i]
	product["price"] = int(input_product_details[i+1].strip())
	product["quantity"] = int(input_product_details[i+2][-1])
	total_products += 1
	total_price += (product["price"] * product["quantity"])
	products[total_products] = product
print(f" Total Items : {total_products} Total Amount : {total_price}")


	
	