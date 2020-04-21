package component

import react.*
import react.dom.*
import kotlinx.html.js.onClickFunction
import org.w3c.dom.events.Event
import data.*
import kotlinx.html.id
import org.w3c.dom.HTMLInputElement
import kotlin.browser.document
import kotlin.browser.window

interface LessonProps : RProps {
    var lesson: Lesson
    var present: Boolean
    var onClick: (Event)->Unit
}

val fLesson =
    functionalComponent<LessonProps> {
        span (
            if(it.present) "present" else "absent"
        ){
            +it.lesson.name
            attrs.onClickFunction = it.onClick
        }
    }

fun RBuilder.lesson(
    lesson: Lesson,
    present: Boolean,
    onClick: (Event)->Unit
) = child(fLesson) {
        attrs.lesson = lesson
        attrs.present = present
        attrs.onClick = onClick
    }

interface LessonEditProps : RProps {
    var index:Int
    var lesson: Lesson
    var onClick: (Lesson)->Unit
    var remove: (Int) -> Unit
}

val flessonEdit=
    functionalComponent<LessonEditProps> { props ->
        span {
            input() {
                attrs.id = "lessonEdit${props.index}"
                attrs.defaultValue = props.lesson.name
            }
            button {
                +"Save"
                attrs.onClickFunction = {
                    val inputElement = document
                        .getElementById("lessonEdit${props.index}")
                            as HTMLInputElement
                    props.remove(props.index)
                    props.onClick(Lesson(inputElement.value))
                    window.history.back()
                }
            }
        }
    }

fun RBuilder.lessonEdit(
     index:Int,
     lesson: Lesson,
     onClick: (Lesson)->Unit,
     remove: (Int) -> Unit
) = child(flessonEdit){
        attrs.index=index
        attrs.lesson=lesson
        attrs.onClick=onClick
        attrs.remove=remove
}

