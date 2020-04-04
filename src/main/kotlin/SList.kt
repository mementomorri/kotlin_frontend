import data.Student
import react.*
import react.dom.li
import react.dom.ol

interface SListProps : RProps {
    var students: Array<Student>
}

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

fun RBuilder.slist(students: Array<Student>) =
    child(SList::class) {
        attrs.students = students
    }
