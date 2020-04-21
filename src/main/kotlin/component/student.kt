package component

import react.*
import react.dom.*
import kotlinx.html.js.onClickFunction
import org.w3c.dom.events.Event
import data.*
import hoc.withDisplayName
import kotlinx.html.id
import org.w3c.dom.HTMLInputElement
import kotlin.browser.document
import kotlin.browser.window

interface StudentProps : RProps {
    var student: Student
    var present: Boolean
    var onClick: (Event)->Unit
}

val fStudent =
    functionalComponent<StudentProps> {
        span (
            if(it.present) "present" else "absent"
        ){
            +"${it.student.firstname} ${it.student.surname}"
            attrs.onClickFunction = it.onClick
        }
    }

fun RBuilder.student(
    student: Student,
    present: Boolean,
    onClick: (Event)->Unit
) = child(
    withDisplayName(student.firstname, fStudent)
) {
        attrs.student = student
        attrs.present = present
        attrs.onClick = onClick
    }

interface studentEditProps : RProps {
    var index:Int
    var student: Student
    var onClick: (Student)->Unit
    var remove: (Int) -> Unit
}

val fstudentEdit=
    functionalComponent<studentEditProps> { props ->
        span {
            input() {
                attrs.id = "studentFirstnaneEdit${props.index}"
                attrs.defaultValue = props.student.firstname
            }
            input() {
                attrs.id = "studentSurnameEdit${props.index}"
                attrs.defaultValue = props.student.surname
            }
            button {
                +"Save"
                attrs.onClickFunction = {
                    val firstname = document
                        .getElementById("studentFirstnaneEdit${props.index}")
                            as HTMLInputElement
                    val surname = document
                        .getElementById("studentSurnameEdit${props.index}")
                            as HTMLInputElement
                    props.remove(props.index)
                    props.onClick(Student(firstname.value, surname.value))
                    window.history.back()
                }
            }
        }
    }

fun RBuilder.studentEdit(
     index:Int,
     student: Student,
     onClick: (Student)->Unit,
     remove: (Int) -> Unit
) = child(fstudentEdit){
    attrs.index=index
    attrs.student=student
    attrs.onClick=onClick
    attrs.remove=remove
}
