#4) შექმენით სეტი და დაამატეთ რამდენიმე რიცხვი შემდეგ ჯერ remove ით ამოაგდეთ რიცხვები და შემდეგ discard ით    
#დაბეჭდეთ დახელახლა დაამატეთ update ით რიცხვები
my_set = {1, 2, 3, 4, 5, 6, 7, 8, 9}

my_set.remove(3)  
my_set.discard(10)   

print(my_set)

my_set.update([10, 11, 12])
print(my_set)