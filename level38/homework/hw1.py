student = {
    "სახელი": "barbare",
    "გვარი": "okujava",
    "ასაკი": 13,
    "საგანი": "arcerti"
}
for key in student:
    print(key)
for value in student.values():
    print(value)
student["ასაკი"] = 16
del student["საგანი"]
student.pop("გვარი")
student.clear()
