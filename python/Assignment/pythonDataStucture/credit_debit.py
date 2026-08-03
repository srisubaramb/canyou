credit_debit_details = input("Enter credit debit details: ").strip().split(" ")#Credit 5000 Debit 1200 Credit 2500 Debit 1000
credit = []
debit = []
for i in range(0, len(credit_debit_details) , 2):
	if credit_debit_details[i].strip().lower() == "credit":
		credit.append(int(credit_debit_details[i+1].strip()))
	else:
		debit.append(int(credit_debit_details[i+1].strip()))
total_debit = sum(debit)
total_credit = sum(credit)
print(f"Total Credit : {total_credit} Total Debit : {total_debit} Balance : {total_credit - total_debit}")