import math
def check_non_prime(number):
	if number <= 1:
		return True
	for i in range(2, math.isqrt(number) + 1):
		if number % i == 0:
			return True
	return False
number = 4
if check_non_prime(number):
	print(number ," is a non-prime")
else:
	print(number , " is a prime")