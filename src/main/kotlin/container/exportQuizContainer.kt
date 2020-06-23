package container

import component.ExportQuizProps
import component.fExportQuiz
import data.MultipleChoice
import data.State
import data.TrueFalse
import react.*
import react.dom.*
import react.redux.rConnect
import redux.RAction
import redux.WrapperAction

interface ExportQuizDispatchProps : RProps{

}

interface ExportQuizStateProps : RProps{
    var multipleChoiceMap : Map<Int, MultipleChoice>
    var trueFalseMap : Map<Int, TrueFalse>
}

interface ExportQuizOwnProps : RProps{

}

val exportQuizContainer =
    rConnect<
            State,
            RAction,
            WrapperAction,
            ExportQuizOwnProps,
            ExportQuizStateProps,
            ExportQuizDispatchProps,
            ExportQuizProps>(
            {state, _ ->
                multipleChoiceMap = state.multipleChoiceQuestions
                trueFalseMap = state.trueFalseQuestions
            },
            {_,_ ->

            }
    )(
        fExportQuiz()
            .unsafeCast<RClass<ExportQuizProps>>()
    )