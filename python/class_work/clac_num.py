import numpy as np
expression = input("Enter the expression: ").strip()
last_index = 0
processedExpression = []
for i in range(len(expression)):
	if not expression[i].isdigit():
		processedExpression.append(int(expression[last_index:i]))
		processedExpression.append(expression[i])
		last_index = i + 1
processedExpression.append(int(expression[last_index:]))
index = 0
while index < len(processedExpression):
	if processedExpression[index] == '*':
		processedExpression[index-1 : index + 2] = [np.multiply(processedExpression[index-1] , processedExpression[index+1])]
	elif processedExpression[index] == '/':
		processedExpression[index-1 : index + 2] = [np.divide(processedExpression[index-1] , processedExpression[index+1])]
	else:
		index += 1
answer = processedExpression[0]
for i in range(1, len(processedExpression)):
	if processedExpression[i] == '+':
		answer = np.add(answer, processedExpression[i+1])
	elif processedExpression[i] == '-':
		answer = np.subtract(answer , processedExpression[i+1])
print(answer)