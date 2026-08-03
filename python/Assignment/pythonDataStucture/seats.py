inputData = [ ["A","B","A"], ["B","B","A"], ["A","A","A"] ]
booked_seats = 0 
available_seats = 0
for i in inputData:
	for j in i:
		if j == "A":
			available_seats += 1
		else:
			booked_seats += 1
print(f"Available Seats : {available_seats} Booked Seats : {booked_seats}")