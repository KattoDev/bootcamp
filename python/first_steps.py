# name = "Kris"

# print(f"Hola {name}")

age = 2

if age >= 18:
  print("Es mayor de edad")
else:
  print("Eche pa' juera")


# loops
for i in range(5):
  print(i)

print("-----------------")

for i in range(10, 15):
  print(i)

print("-----------------")

for i in range(100, 120, 2):
  print(i)

print("-----------------")

nums = [1, 2, 3, 4, 5]

for num in nums:
  print(num)

print("-----------------")

for index, num in enumerate(nums):
  print(index, num)

print("Mi array mide: ", len(nums))