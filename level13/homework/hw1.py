#1
for i in range(15):
    print("hello")

#2  
for i in range(1,20):
    print(i)

#3
print("ლუწი რიცხვები:") 
for i in range(1,20):
    if i % 2==0:
        print(i)

 #4
print("კენტი რიცხვები:")
for i in range(1,20):
    if i % 2 ==1:
        print(i)

#5
print("luwi da kenti ricxvebi")
for i in range(1,11):
    if i % 2 ==0:
        print(i,"luwi")
    else:
        print(i,"kentia")
    

 #6
word ="hello" 
for  i in word:
    print(i)


#7
numbers=[10,20,30,40,50]
for num in numbers:
    print(num)

#8
fruits=["vashli","banani","marwyvi"]
for fruit in fruits:
      print(f"მე მიყვარს: {fruit}")

#9
total = 0 
for i in range(1, 11):
    total += i
print("ჯამი =", total)

#10
numbers = [2, 5, 8, 10, 15]

for num in numbers:
    print(num - 1)

#11
for i in range(1, 11):
    if i % 3 == 0:
        print(i, "True")
    else:
        print(i, "False")

#12
word = "hello"
print(word * 2)


#13
# რა არის flowchart?
#ეს არის სურათი, სადაც ნაჩვენებია, 
#როგორ უნდა იმუშაოს ალგორითმა ნაბიჯ-ნაბიჯ.

#14
# Iteration (იტერაცია):
# ნიშნავს განმეორებას, ანუ იგივე მოქმედების მრავალჯერ შესრულებას.
# ამისთვის ვიყენებთ for ან while ციკლებს.

# Selection (არჩევა):
# გამოიყენება მაშინ, როცა გვინდა პროგრამამ არჩევანი გააკეთოს პირობიდან გამომდინარე.
# მაგალითად if-else სტრუქტურა.

# Sequencing (მიმდევრობა):
# ეს ნიშნავს, რომ პროგრამა ასრულებს ბრძანებებს ზუსტად იმ მიმდევრობით,
# როგორც ისინი დაწერილია — ზემოდან ქვემოთ.

#Sequencing → ბრძანებები სრულდება რიგრიგობით.

#Selection → პროგრამა ირჩევს გზას (პირობის მიხედვით).

#Iteration → იგივე კოდი მეორდება რამდენჯერმე (ციკლი).

#15
# range() ქმნის რიცხვების მიმდევრობას.
# გამოიყენება for ციკლში.
# მაგალითი:
for i in range(1, 5):
    print(i)  # გამოიტანს: 1, 2, 3, 4

#16
#ალგორითმი — ეს არის ნაბიჯების ან წესების თანმიმდევრობა,
#რომელიც გვიჩვენებს, როგორ უნდა მივიდეთ მიზნამდე ან როგორ უნდა შევასრულოთ კონკრეტული ამოცანა
