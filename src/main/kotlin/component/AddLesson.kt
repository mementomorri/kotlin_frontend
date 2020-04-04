package component

import kotlinx.html.*
import kotlinx.html.js.onClickFunction
import org.w3c.dom.HTMLInputElement
import react.*
import react.dom.*
import kotlin.browser.document

interface lessonProps :RProps{
    var onClick : (String)  -> Unit
}

val fAddLesson =
    functionalComponent<lessonProps>{
        input(InputType.text) {
            attrs.id="lessonName"
            attrs.placeholder= "Enter lesson name"
        }
        button {
            +"+"
            val alias=it.onClick
            attrs.onClickFunction = {
                val lesson = document.getElementById("lessonName") as HTMLInputElement
                alias(lesson.value)
            }
        }
    }

fun RBuilder.addLesson(
    onClick : (String)  -> Unit
)=child(fAddLesson){
    attrs.onClick=onClick
}
