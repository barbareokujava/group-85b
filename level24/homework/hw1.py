#შექმენით ფუნქცია, მიიღებთ რიცხვს, თუ კენტია დააბრუნეთ "კენტია", თუ ლუწი - "ლუწია"
def num(ricxvi):
    if ricxvi % 2==0:
        return "luwia"
    else:
        return "kentia"

print(num(10))

#შექმენით ფუნქცია, მიიღებთ სიტყვას, ერთი სტრინგი, (ინგლისური),
#  ყველა ასოს გარდაქმნით დიდ ასოებად, შემდეგ დაანაწევრე და სიად გადააქცი

def rame(word):
    a = word.upper()
    arr = []
    for i in a:
        arr.append(i)
    return arr

print(rame("vashli"))

#3. შექმენით ფუნქცია, მიიღებთ ორ რიცხვს, დააბრუნეთ ამ რიცხვების ნამრავლი
def namravli(ricxvi1,ricxvi2):
    return ricxvi1 * ricxvi2

print(namravli(6,7))
