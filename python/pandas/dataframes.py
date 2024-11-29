import pandas as pd

students = ["fulanito", "sultanito", "Menganito"]
grades = [1, 2, 3]

# ? df = dataframe
df = pd.DataFrame({"Estudiantes": students, "Notas": grades})

# ? prints as graphic
df.plot()

# ? export to csv (filename, index=[True or False], sep="")
df.to_csv("listado.csv", index=False, sep=";")
