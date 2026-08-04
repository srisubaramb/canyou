import pandas as pd
#printing the complete dataset
student_dataset = pd.read_csv('./pandas_student_dataset.csv')
print(student_dataset)
#first 5 records
print("First 5 records")
print(student_dataset.head(5))

print("First 3 records")
print(student_dataset.head(3))

print("Last 5 records")
print(student_dataset.tail(5))

print("Last 4 records")
print(student_dataset.tail(4))

total_rows , total_cols = student_dataset.shape
print("Total Rows: " , total_rows)
print("Total cols: ", total_cols)

print("Name of Columns")
print(list(student_dataset.columns))

print("Datatypes of columns")
print(student_dataset.dtypes)

print("Info Dataset")
print(student_dataset.info())

print("Describe/Summary of columns")
print(student_dataset.describe())