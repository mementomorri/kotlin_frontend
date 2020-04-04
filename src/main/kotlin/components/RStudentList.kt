package components

import data.Student
import org.w3c.dom.events.Event
import react.*
import react.dom.li

interface RStudentListProps : RProps {
    var students: Array<Student>
}

fun RBuilder.fStudentList(students: Array<Student>, state : Array<Boolean>, onClick: (Int) -> (Event)->Unit) =
    child(functionalComponent<RStudentListProps> { props ->
        props.students.mapIndexed {index, student ->
            li {
                rstudent(student, state[index],onClick(index))
            }
        }
    }){
        attrs.students = students
    }

//interface components.RStudentListState : RState {
//    var present: Array<Boolean>
//}

//class RStudentList : RComponent<components.RStudentListProps, components.RStudentListState>() {
//
//    override fun componentWillMount() {
//        state.apply {
//            present = Array(props.students.size){false}
//        }
//    }
//
//    override fun RBuilder.render() {
//        ol {
//            props.students.mapIndexed { index, student ->
//                li {
//                    components.rstudent(student, state.present[index], onClick(index))
//                }
//            }
//        }
//    }
//
//    fun onClick(index: Int): (Event) -> Unit = {
//        setState {
//            present[index] = !present[index]
//        }
//    }
//}

//fun RBuilder.studentList(students: Array<Student>) =
//    child(RStudentList::class) {
//        attrs.students = students
//    }