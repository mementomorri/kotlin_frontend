package component

import data.Student
import kotlinx.html.id
import kotlinx.html.js.onClickFunction
import org.w3c.dom.HTMLInputElement
import react.RBuilder
import react.RProps
import react.child
import react.dom.*
import react.functionalComponent
import kotlin.browser.document

interface StudentEditProps : RProps {
    var onClick: (Student) -> Unit
}

val fAddstudent =
    functionalComponent<StudentEditProps> { props ->
        span { +"Enter new student name:" }
        br {  }
        span {
            input() {
                attrs.id = "firstname"
                attrs.placeholder = "firstname"
            }
            input() {
                attrs.id = "surname"
                attrs.placeholder = "surname"
            }
            button {
                +"add student"
                attrs.onClickFunction = {
                    val firstname = document
                        .getElementById("firstname")
                            as HTMLInputElement
                    val surname = document
                        .getElementById("surname")
                            as HTMLInputElement
                    props.onClick(Student(firstname.value, surname.value))
                }
            }
        }
    }

fun RBuilder.addStudent(
    onClick: (Student) -> Unit
) = child(fAddstudent) {
    attrs.onClick = onClick
}