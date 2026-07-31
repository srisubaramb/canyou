user_input = input("Enter the string to analyse : ")
user_input_original = user_input
user_input_uppercase = user_input.upper()
user_input_lowercase = user_input.lower()
user_input_length = len(user_input)
user_input_first_char = user_input[0]
user_input_last_char = user_input[-1]
user_input_reversed = user_input[::-1]
vowles = "aeiouAEIOU"
count = 0
for char in user_input:
	if char in vowles:
		count += 1
user_input_vowles_count = 0
print(f"Original {user_input_original}\nUppercase {user_input_uppercase}\nLowercase {user_input_lowercase}\nLength {user_input_length}\nFirst Char {user_input_first_char}\nLast Char {user_input_last_char}\nreversed{user_input_reversed}\nvowles {user_input_vowles_count}")
