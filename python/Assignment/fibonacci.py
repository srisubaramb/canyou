def fibo(number):
	a = 0 
	b = 1
	for i in range(number):
		if i == 0:
			print(a)
		elif i == 1:
			print(b)
		else:
			c = a + b
			a = b
			b = c
			print(c)
fibo(3)

