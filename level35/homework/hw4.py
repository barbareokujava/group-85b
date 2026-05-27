#4) ფუნქცია იღებს რიცხვს და 
#თუ ის ლუწია, გაორმაგებს, წინააღმდეგ შემთხვევაში 3–ით გაიმრავლებს.

def numbers(num):
    if num % 2 == 0:
        return num * 2
    else:
        return num * 3
        
print(numbers(5))
print(numbers(6))