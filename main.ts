input.onButtonPressed(Button.A, function () {
    max = students.length
    index = randint(0, students.length - 1)
    name = students[index]
    students.removeAt(index)
    basic.showString("" + (name))
})
let name = ""
let index = 0
let max = 0
let students: string[] = []
students = ["Axel", "Algot", "Axel", "Daniel", "Anton", "Dennis", "Filip", "Tage", "Anton", "Lukas", "Max", "Victor", "Hugo"]
