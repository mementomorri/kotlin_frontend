package component

import data.Lesson
import kotlinx.html.*
import kotlinx.html.js.onClickFunction
import org.w3c.dom.HTMLInputElement
import react.*
import react.dom.*
import kotlin.browser.document

interface lessonProps :RProps{
    var onClick : (Lesson)  -> Unit
}

val fAddLesson =
    functionalComponent<lessonProps>{props->
        span { +"Enter new lesson name:" }
        br {  }
        span {
            input() {
                attrs.id = "lessonName"
                attrs.placeholder = "lesson name"
            }
            button {
                +"add lesson"
                attrs.onClickFunction = {
                    val lessonName = document
                        .getElementById("lessonName")
                            as HTMLInputElement
                    props.onClick(Lesson(lessonName.value))
                }
            }
        }
    }

fun RBuilder.addLesson(
    onClick : (Lesson)  -> Unit
)=child(fAddLesson){
    attrs.onClick=onClick
}
