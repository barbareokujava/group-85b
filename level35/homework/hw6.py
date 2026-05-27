#6) ფუნქცია აბრუნებს სიაში დადებითი რიცხვების რაოდენობას.

def dadebiti(arr):
    a = 0
    for num in arr:
        if num > 0:
            a += 1

    return a 
        
print(dadebiti([-2,4,-5,6,-7,8,9,-4,-8,11,12]))



