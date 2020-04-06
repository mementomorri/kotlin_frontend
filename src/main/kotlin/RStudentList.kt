import data.Student
import org.w3c.dom.events.Event
import react.*
import react.dom.li
import react.dom.ol
import react.dom.ul

interface RStudentListProps : RProps {
        var students: Array<Student>
        var present: Array<Boolean>
        var onClick: (Int) -> (Event)->Unit
}

val studentList =
    functionalComponent<RStudentListProps>{
        ul {
            it.students.mapIndexed { index, student ->
                li {
                    rstudent(student, it.present[index], it.onClick(index))
                }
            }
        }
    }

fun RBuilder.fstudentList(
    students: Array<Student>,
    present: Array<Boolean>,
    onClick: (Int) -> (Event)->Unit
) =child(studentList){
    attrs.students=students
    attrs.present=present
    attrs.onClick=onClick
}

