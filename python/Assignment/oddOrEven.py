def isOdd(number):
	if number % 2 == 0:
		return False
	return True
number = 3
if isOdd(number):
	print(number , " is odd")
else:
	print(number, " is even")