def fac(number):
	if number == 0:
		return 1;
	return number * fac(number - 1)
number = int(input("Enter a number to find factorial: "))
print(fac(number))