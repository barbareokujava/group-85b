positive = 0
negative = 0
zero = 0

for num in num :
    if num > 0:
        positive += 1
    elif num < 0:
        negative += 1
    else:
        zero += 1

print(positive, negative, zero)
