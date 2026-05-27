#7) ფუნქცია აბრუნებს რიცხვების ჯამს 1–დან n–მდე.

def numbers(n):
    a = 0
    for i in range(1, n + 1):
        a +=i
    return a
    
print(numbers(7))