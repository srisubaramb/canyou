import utils
input_string = input("Enter the inventory details: ")
input_string = utils.input_string_to_dict(input_string)
needed_restocking = []
for key , value in input_string.items():
	if value < 5 :
		needed_restocking.append(key)

#printing the op
print("Products to Restock : " + " ".join(needed_restocking))
