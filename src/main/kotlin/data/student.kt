package data

data class Student (
    val firstname: String,
    val surname: String,
    val id:Number
)

val studentList =
    arrayListOf(
        Student("Sheldon", "Cooper", 1),
        Student("Leonard", "Hofstadter", 2),
        Student("Howard", "Wolowitz", 3),
        Student("Alexey", "Karsten", 4)
    )