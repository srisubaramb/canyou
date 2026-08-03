inputString = input("Enter the String to count Letters in it : ")
output = {}
for current_letter in inputString:
	count = 0;
	for letter in inputString:
		if current_letter == letter:
			count += 1
	output[current_letter] = count
for key, value in output.items():
	print(f"{key} : {value}")
