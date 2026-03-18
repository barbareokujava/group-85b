#3) შექმენით სეტი სადაც ექნება რაიმე მნიშვნელობები გადავემული და ამ სეტში დაამატეთ
# for ციკლით(11 - დან 20 - ის      ჩათვლით) რიცხვები(update უნდა გამოიყენოთ)

my_set = {1, 3, 5, 7, 9}

numbers = []
for i in range(11, 21):
    numbers.append(i)

my_set.update(numbers)
print(my_set)