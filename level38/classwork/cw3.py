person = {
    "სახელი": "ბარბარე",
    "გვარი": "ოკუჯავა",
    "ასაკი": 67,
    "ჰობი": "ჭამა"
}
for value in person.values():
    print(value)

del person["ჰობი"]
person.pop("ასაკი")
{
    "სახელი": "ბარბარე",
    "გვარი": "ოკუჯავა"
}

