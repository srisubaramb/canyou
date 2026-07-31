password = input("Enter password to analyse: ")
is_min_8_letters = len(password) >= 8
has_upper = False
has_lower = False
has_digit = False
for char in password:
	if char.isupper():
		has_upper = True
	elif char.islower():
		has_lower = True
	elif char.isdigit():
		has_digit = True

if is_min_8_letters and has_upper and has_lower and has_digit:
	print("Strong password")
elif (has_upper and has_lower) or (has_digit and has_lower):
	print("Medium password")
else:
	print("Weak password")