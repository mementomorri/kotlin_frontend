import data.studentList
import kotlinx.html.*
import kotlinx.html.dom.append
import kotlinx.html.js.*
import kotlinx.html.p
import kotlinx.html.select
import org.w3c.dom.*
import org.w3c.dom.events.Event
import kotlin.browser.document
import kotlin.dom.clear

var ascending = true

fun main() {
    document.getElementById("root")!!
        .append {
            h1 {
                attributes += "id" to "header"
                +"Students"
                onClickFunction = onCLickFunction()
            }
            ol {
                attributes += "id" to "listStudents"
                studentList.map {
                    li {
                        //attributes+="class" to "beforeClick"
                        attributes += "id" to "${it.id}"
                        +"${it.firstname} ${it.surname}"
                        //onClickFunction= changeColor()
                    }
                }
            }
            select (options= arrayListOf("blue", "green")){
                attributes += "id" to "selectColor"
                onClickFunction = {
                    val selectColor =
                        document.getElementById("selectColor")!!
                                as HTMLSelectElement
                    val header = document.getElementById("header")!!
                    header.setAttribute("style", "color:${selectColor.value}")
                }
            }
            br { }
            p { +"Just some text to make sure everything works fine." }
            form(radioBtn = arrayListOf("grey", "red", "white"))
        }
    }

private fun INPUT.fontColor(): (Event) -> Unit {
    return {
        val selectedColor = document.getElementById(this.id)!!
        document.body!!.setAttribute("style", "color:${selectedColor.id}")
    }
}

/**private fun LI.changeColor(): (Event) -> Unit {
    return {
        val certainStudenr = document.getElementById(this.id)!!
        if (certainStudenr.classList.contains("beforeClick")) {
            certainStudenr.setAttribute("class", "afterClick")
        } else {
            certainStudenr.setAttribute("class", "beforeClick")
        }
    }
}**/


private fun H1.onCLickFunction(): (Event) -> Unit {
    return {
        val listStudents = document.getElementById("listStudents")!!
        listStudents.clear()
        listStudents.append {
            if (ascending)
                studentList.sortBy { it.firstname }
            else
                studentList.sortByDescending { it.firstname }
            ascending = !ascending
            studentList.map {
                li {
                    //attributes+="class" to "beforeClick"
                    attributes+="id" to "${it.id}"
                    +"${it.firstname} ${it.surname}"
                    //onClickFunction= changeColor()
                }
            }
        }
    }
}

fun <T, C : TagConsumer<T>> C.select(
    classes : String? = null,
    options:List<String>,
    block : SELECT.() -> Unit = {}
    ) : T = select (
    classes
) {
    options.forEach {
        option {
            attributes += "value" to it
            +it
        }
    }
    block()
}

fun TagConsumer<HTMLElement>.form(
    action : String? = null,
    encType : FormEncType? = null,
    method : FormMethod? = null,
    classes : String? = null,
    radioBtn: List<String>,
    block : FORM.() -> Unit = {}
) : HTMLFormElement = form(
    action,
    encType,
    method,
    classes
){
    radioBtn.forEach {
        input(InputType.radio) {
            attributes += "id" to it
            attributes += "name" to "color"
            attributes += "value" to it
            onClickFunction = fontColor()
        }
        label {
            attributes += "for" to "color"
            +it
        }
    }
    block()
}