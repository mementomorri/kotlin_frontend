# lab4
Основной код для реализации списка студентов как компонента добавлен в файле SList.kt, 
имеется решение как при помощи послноценного компонента
на основе класса SList и последовательного написания соответствующей функции slist:

    class SList : RComponent<SListProps, RState>() {

    override fun RBuilder.render() {
        ol {
            props.students.mapIndexed { _, student ->
                li {
                    rstudent(student)
                }
            }
        }
    }
    }
    fun RBuilder.slist(students: Array<Student>) =
        child(SList::class) {
         attrs.students = students
     }
    
Так и решение на основе функционального компонента listOfStudents:
    
    fun RBuilder.listOfStudents(students: Array<Student>) =
        child( functionalComponent<SListProps>{
            ol {
                it.students.mapIndexed { _, student ->
                    li {
                        rstudent(student)
                    }
                }
            }
        }) {
            attrs.students = students
        }
    
Оба решения используют один и тот же интерфейс SListProps:
    
    interface SListProps : RProps {
    var students: Array<Student>
    }

Изменения в файле main.kt затрагивают лишь вызов функции внутри тэга h1:

    slist(studentList.toTypedArray()) — вариант на основе класса;
    
![](https://github.com/mementomorri/KotlinReact/blob/master/screenshots/slist.PNG)

    listOfStudents(studentList.toTypedArray()) — вариант на основе функционального компонента.
    
![](https://github.com/mementomorri/KotlinReact/blob/master/screenshots/listOfStudents.PNG)
