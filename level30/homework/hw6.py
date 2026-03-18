#6) შექმენი ცარიელი set, for ციკლით დაამატე მას ყველა კენტი რიცხვი 2-დან 8-მდე.
odd_numbers = set()
for i in range(2, 9):
    if i % 2 != 0:
        odd_numbers.add(i)
print(odd_numbers)
