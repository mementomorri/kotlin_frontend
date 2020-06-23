package component

import data.*
import react.*
import react.dom.*

external fun encodeURIComponent(str: String): String

interface ExportQuizProps : RProps{
    var multipleChoiceMap : Map<Int,MultipleChoice>
    var trueFalseMap : Map<Int,TrueFalse>
}

fun  fExportQuiz()= functionalComponent<ExportQuizProps> {props ->
    var multipleChoiceXML=""
            props.multipleChoiceMap.values.forEach { question ->
                val result = "<question type=\"multichoice\">\n <questiontext format=\"html\">\n <text>${question.name} </text>\n  </questiontext> \n <answer fraction=\"${question.arrayOfAnswers[0].fractionOfAnswer}\">\n" +
                        " <text>${question.arrayOfAnswers[0].possibleAnswer}</text>\n <feedback><text>${if (question.arrayOfAnswers[0].fractionOfAnswer!=100.0) "Correct!" else  "Wrong!"}</text></feedback>\n" +
                        "</answer>\n <answer fraction=\"${question.arrayOfAnswers[1].fractionOfAnswer}\">\n <text>${question.arrayOfAnswers[1].possibleAnswer}</text>\n" +
                        "<feedback><text>${if (question.arrayOfAnswers[0].fractionOfAnswer!=100.0) "Correct!" else  "Wrong!"}</text></feedback>\n </answer>\n" +
                        " <answer fraction=\"${question.arrayOfAnswers[2].fractionOfAnswer}\">\n <text>${question.arrayOfAnswers[2].possibleAnswer}</text>\n" +
                        "<feedback><text>${if (question.arrayOfAnswers[0].fractionOfAnswer!=100.0) "Correct!" else  "Wrong!"}</text></feedback>\n </answer>\n" +
                        "<shuffleanswers>1</shuffleanswers>\n <single>true</single>\n <answernumbering>abc</answernumbering>\n" +
                        "</question> \n"
                multipleChoiceXML+=result
            }

    var trueFalseXML= ""
        props.trueFalseMap.values.forEach { question  ->
            val result = "<question type=\"truefalse\">\n <questiontext format=\"html\">\n <text>${question.name}</text>\n </questiontext>" +
                        " <answer fraction=\"${if (question.correctAnswer==0) 100 else 0}\">\n <text>${question.answers.first}</text>\n" +
                        " <feedback><text>${if (question.correctAnswer==0) "Correct!" else "Wrong"}!</text></feedback>\n </answer>\n" +
                        " <answer fraction=\"${if (question.correctAnswer==1) 100 else 0}\">\n <text>${question.answers.second}</text>\n" +
                        " <feedback><text>${if (question.correctAnswer==1) "Correct!" else "Wrong"}!</text></feedback>\n </answer>\n" +
                        " </question> \n"
            trueFalseXML += result
        }

    span { +"To export your quiz to XML Moodle specific format just click " }
    a {
        attrs.href = "data:application/octet-stream; charset=utf-8,"+ encodeURIComponent("<?xml version=\"1.0\" ?>\n <quiz>\n $multipleChoiceXML $trueFalseXML </quiz>")
        +"here."
    }
}