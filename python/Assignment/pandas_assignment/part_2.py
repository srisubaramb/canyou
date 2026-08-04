import pandas as pd
student_data = pd.read_csv("./pandas_student_dataset.csv")

print("Student Names")
print(student_data["Name"])

print(student_data[["Name" , "Department" , "Pandas_Marks"]])

print(student_data[["Student_ID" , "Name" , "City" , "Attendance"]])

print(student_data[["Name" , "Project_Status"]])