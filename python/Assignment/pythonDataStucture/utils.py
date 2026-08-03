def input_string_to_dict(input_string , index_of_number = 1):
	cleanedInput = input_string.strip()[1:-2].split(',')
	index = 0
	for data in cleanedInput:
		data = data.strip().replace("\"" , "")
		cleanedInput[index] = data.split(":")
		cleanedInput[index][index_of_number] = int(cleanedInput[index][index_of_number])
		index += 1
	return dict(cleanedInput)