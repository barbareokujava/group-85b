from turtle import*

#we want to paint a house

#step 1 draw a square 
speed(30)
width(7)
color("purple")
forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)
#end of square

#drawing a door

forward(70)
color("yellow")
begin_fill()
left(90)
forward(120) #height of the door
right(90)
forward(60)
right(90)
forward(120)
end_fill() 
penup()
goto(200, 200)
pendown()

color("red")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()

penup()
goto(130,130)
pendown()

color("blue")
begin_fill()
left(120)
forward(50)

left(90)
forward(50)

left(90)
forward(55)

left(90)
forward(50)

left(90)
forward(30)
end_fill()

left(90)
forward(50)

left(90)
forward(31)

left(90)
forward(30)

left(90)
forward(55)
end_fill()

penup()
left(170)
forward(50)
pendown()

penup()
forward(115)
pendown()

begin_fill()
left(100)
forward(50)

left(90)
forward(50)

left(90)
forward(50)

left(90)
forward(50)

left(90)
forward(50)

left(90)
forward(50)

left(90)
left(90)
forward(50)
left(90)
end_fill()

left(120)
forward(55)











exitonclick()