package component

import data.*
import kotlinx.html.InputType
import kotlinx.html.id
import react.*
import react.dom.*
import react.functionalComponent
import react.router.dom.navLink

interface TrueFalseFullProps : RProps {
    var keyQuestionPair: Pair<Int, TrueFalse>
}

fun fTrueFalseFull(
        path:String
) =
        functionalComponent<TrueFalseFullProps> { props ->
            h3 {
                +props.keyQuestionPair.second.toString()
            }
            form {
                attrs.id = "answerChoice"
                div {
                    p { +"Is this statement true or false?" }
                    input(type = InputType.radio) {
                        attrs.name = "choice"
                        attrs.value = "0"
                        attrs.id = "statementIsTrue"
                    }
                    label {
                        attrs.htmlFor = "statementIsTrue"
                        if (props.keyQuestionPair.second.correctAnswer == 0) +"True (correct)" else +"True"
                    }
                    br {  }
                    input(type = InputType.radio) {
                        attrs.name = "choice"
                        attrs.value = "1"
                        attrs.id = "statementIsFalse"
                    }
                    label {
                        attrs.htmlFor = "statementIsFalse"
                        if (props.keyQuestionPair.second.correctAnswer == 1) +"False (correct)" else +"False"
                    }
                }
            }
            br {  }
            span {
                navLink("$path/${props.keyQuestionPair.first}/edit"){
                    +"Edit question"
                }
            }
        }