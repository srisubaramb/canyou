import pandas as pd
student_data = pd.read_csv("./pandas_student_dataset.csv")

print("Student At 5")
print(student_data.iloc[5])

print("Student At 10")
print(student_data.iloc[10])

print("student at row 1")
print(student_data.iloc[0])

print("Student name at 4th row")
print(student_data.at[4,"Name"])

print("Value At 3rd row 5th column")
print(student_data.iat[3,5])

print("rows from 2 to 6")
print(student_data.iloc[2:7])