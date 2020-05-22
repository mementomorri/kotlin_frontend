package component

import react.*
import react.dom.*
import kotlinx.html.js.onClickFunction
import org.w3c.dom.events.Event
import data.*
import kotlinx.html.InputType
import kotlinx.html.id
import org.w3c.dom.HTMLInputElement
import kotlin.browser.document
import kotlin.browser.window

interface TrueFalseProps : RProps {
    var TrueFalse: TrueFalse
    var onClick: (Event) -> Unit
}

val fTrueFalseQuestion =
    functionalComponent<TrueFalseProps> {
        span{
            +"${it.TrueFalse.name}"
            attrs.onClickFunction = it.onClick
        }
    }

fun RBuilder.trueFalseQuestion(
        TrueFalse: TrueFalse,
        onClick: (Event) -> Unit
) = child(
    fTrueFalseQuestion
) {
    attrs.TrueFalse = TrueFalse
    attrs.onClick = onClick
}

interface TrueFalseEditProps : RProps {
    var TrueFalse: Pair<Int, TrueFalse>
    var onClick: (TrueFalse) -> Unit
}

val fTrueFalsetEdit =
    functionalComponent<TrueFalseEditProps> { props ->
        p { +"Edit true/talse question:" }
        input(type = InputType.text) {
            attrs.size = "50"
            attrs.id = "name${props.TrueFalse.first}"
            attrs.defaultValue = props.TrueFalse.second.name
        }
        br {  }
        p { +"Choose correct answer:" }
        input(type = InputType.text){
            attrs.size = "2"
            attrs.id = "correctAnswerIs"
            attrs.defaultValue = if (props.TrueFalse.second.correctAnswer==0) "True" else "False"
        }
            br {  }
            button {
                +"Save"
                attrs.onClickFunction = {
                    val name = document
                            .getElementById("name${props.TrueFalse.first}")
                            as HTMLInputElement
                    val answerChoice = document
                            .getElementById("correctAnswerIs")
                            as HTMLInputElement
                    val calculatedAnswerNumber = when (answerChoice.value){
                        "True" -> 0
                        "true" ->0
                        "False" ->1
                        "false" -> 1
                        else -> props.TrueFalse.second.correctAnswer
                    }
                    props.onClick(TrueFalse(name.value, Pair("True", "False"), calculatedAnswerNumber))
                    window.history.back()
                }
            }
        }
//    }
