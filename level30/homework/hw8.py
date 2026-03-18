#8) შექმენი ორი ცარიელი set, პირველს დაამატე რიცხვები 1 და 2, მეორეს დაამატე რიცხვები 2 და 3, შემდეგ გააერთიანე ისინი.
set_a = set()
set_a.add(1)
set_a.add(2)

set_b = set()
set_b.add(2)
set_b.add(3)

union_set = set_a.union(set_b)
print(union_set)
