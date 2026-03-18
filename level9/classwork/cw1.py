წვიმს=True
ქოლგა=True

if წვიმს:
    print (ქოლგა)

    hour=int(input("შეიყვანეთ საათი(0-23):"))

    if hour <10:
        print("დილამშვიდობისაააა")
    elif hour < 20:
        print("საღამომშვიდობისა")
    else:
        print("ღამემშვიდობისა")