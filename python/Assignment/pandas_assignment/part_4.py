import pandas as pd
student_data = pd.read_csv("./pandas_student_dataset.csv")
print(student_data[student_data["Pandas_Marks"]> 80 ]["Name"])