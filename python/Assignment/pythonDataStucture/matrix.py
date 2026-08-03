input_numbers = input("Enter the numbers: ").strip().split()#1 2 3 4 5 6 7 8 9 9 8 7 6 5 4 3 2 1
input_numbers_matrix1 = input_numbers[:9]#1 2 3 4 5 6 7 8 9 first 9 
input_numbers_matrix2 = input_numbers[9:]#9 8 7 6 5 4 3 2 1 last nine
def input_to_matrix(input_numbers):
	matrix = []
	for i in range(0 , len(input_numbers), 3):
		current_row = convert_str_to_list_int(input_numbers[i], input_numbers[i+1] , input_numbers[i+2])
		matrix.append(current_row)
	return matrix
def convert_str_to_list_int(*values):
	value1 = int(values[0])
	value2 = int(values[1])
	value3 = int(values[2])
	return [value1, value2, value3]

matrix1 = input_to_matrix(input_numbers_matrix1)
matrix2 = input_to_matrix(input_numbers_matrix2)
sum = []
for i in range(len(matrix1)):
	sum.append([])
	for j in range(len(matrix1[i])):
		sum[i].append(matrix1[i][j] + matrix2[i][j])
for entry in sum:
	for numbers in entry:
		print(numbers , end=" ")