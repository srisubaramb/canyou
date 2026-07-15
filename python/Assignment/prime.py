import math
def checkPrime(number):
	if number <= 1:
		return False
	for i in range(2, math.isqrt(number) + 1):
		if number % i == 0:
			return False
	return True
number = 3
if checkPrime(number):
	print(number ," is a prime")
else:
	print(number ," is not a prime")