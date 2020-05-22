package component

import data.*
import kotlinx.html.InputType
import kotlinx.html.id
import kotlinx.html.js.onClickFunction
import org.w3c.dom.events.Event
import react.*
import react.dom.*
import react.functionalComponent
import react.router.dom.navLink

interface MultipleChoiceFullProps : RProps {
    var keyQuestionPair: Pair<Int, MultipleChoice>
}

fun fMultipleChoiceFull(
        path:String
) =
        functionalComponent<MultipleChoiceFullProps> { props ->
            h3 {
                +props.keyQuestionPair.second.toString()
            }
            p {
                +"Choose one or more answers:"
            }
            form {
                table {
                    props.keyQuestionPair.second.arrayOfAnswers.forEach { answer ->
                        tr {
                            td {
                                input(type = InputType.checkBox) {
                                    attrs.id = "answer${props.keyQuestionPair.first}"
                                    attrs.name = "choice"
                                    attrs.value = "${props.keyQuestionPair.first}"
                                }
                                label {
                                    attrs.htmlFor = "answer${props.keyQuestionPair.first}"
                                    +"$answer (${answer.fractionOfAnswer} points)"
                                }
                            }
                            td {
                            }
                        }
                    }
                }
                span("Link") {
                    navLink("$path/${props.keyQuestionPair.first}/edit") {
                        +"Edit question"
                    }
                }
            }
        }