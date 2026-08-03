inputString = input("Enter the Sentence to remove duplicates: ")
words = inputString.split(" ")
output = []
for currentWord in words:
	if currentWord in output:
		continue
	output.append(currentWord)
print(" ".join(output))