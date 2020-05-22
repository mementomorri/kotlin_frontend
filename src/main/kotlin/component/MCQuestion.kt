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

interface MultipleChoiceProps : RProps {
    var MultipleChoice: MultipleChoice
    var onClick: (Event) -> Unit
}

val fMultipleChoiceQuestion =
    functionalComponent<MultipleChoiceProps> {
        span{
            +it.MultipleChoice.name
            attrs.onClickFunction = it.onClick
        }
    }

fun RBuilder.multipleChoiceQuestion(
        MultipleChoice: MultipleChoice,
        onClick: (Event) -> Unit
) = child(
    fMultipleChoiceQuestion
) {
    attrs.MultipleChoice = MultipleChoice
    attrs.onClick = onClick
}

interface MCQuestionEditProps : RProps {
    var MultipleChoice: Pair<Int, MultipleChoice>
    var onClick: (MultipleChoice) -> Unit
}

val fMCQuestionEdit =
    functionalComponent<MCQuestionEditProps> { props ->
        p { +"Edit multiple choice question:" }
        input(type = InputType.text) {
            attrs.size = "50"
            attrs.id = "name${props.MultipleChoice.first}"
            attrs.defaultValue = props.MultipleChoice.second.name
        }
        br {  }
        p { +"Edit answers and their fraction points:" }
        table {
            tr {
                td {
                    +"Answers:"
                }
                td { +"Fraction points:" }
            }
            props.MultipleChoice.second.arrayOfAnswers.forEach { answer ->
                tr {
                    td {
                        input(type = InputType.text) {
                            attrs.size = "3"
                            attrs.id = "answerEdit${answer.possibleAnswer}"
                            attrs.defaultValue = answer.possibleAnswer
                        }
                    }
                    td {
                        input(type = InputType.text) {
                            attrs.size = "1"
                            attrs.id = "fractionEdit${answer.possibleAnswer}"
                            attrs.defaultValue = "${answer.fractionOfAnswer}"
                        }
                    }
                }
            }
        }
        button {
            +"Save"
            attrs.onClickFunction = {
                val questionItseft = document
                        .getElementById("name${props.MultipleChoice.first}")
                        as HTMLInputElement
                val arrayOfEditedAnswers = mutableListOf<Answer>()
                val arrayOfUneditedAnswers = props.MultipleChoice.second.arrayOfAnswers
                for (a in arrayOfUneditedAnswers){
                    val editedAnswer = document.getElementById("answerEdit${a.possibleAnswer}") as HTMLInputElement
                    val editedFractionPoint = document.getElementById("fractionEdit${a.possibleAnswer}") as HTMLInputElement
                    arrayOfEditedAnswers.add(Answer(editedAnswer.value,editedFractionPoint.value.toDouble()))
                }
                props.onClick(MultipleChoice(questionItseft.value, arrayOfEditedAnswers.toTypedArray()))
                window.history.back()
            }
        }
    }
