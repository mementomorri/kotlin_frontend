package container

import react.*
import redux.*
import react.redux.rConnect
import component.*
import data.*

interface MultipleChoiceEditOwnProps : RProps {
    var MultipleChoice: Pair<Int, MultipleChoice>
}

val multipleChoiceEditContainer =
    rConnect<
            RAction,
            WrapperAction,
            MultipleChoiceEditOwnProps,
            MCQuestionEditProps
            >(
        { dispatch, ownProps ->
            onClick = {
                dispatch(ChangeMultipleChoice(ownProps.MultipleChoice.first, it))
            }
        }
    )(

            fMCQuestionEdit
            .unsafeCast<RClass<MCQuestionEditProps>>()
    )

interface TrueFalseEditOwnProps : RProps {
    var TrueFalse: Pair<Int, TrueFalse>
}

val trueFalseEditContainer =
    rConnect<
            RAction,
            WrapperAction,
            TrueFalseEditOwnProps,
            TrueFalseEditProps
            >(
        { dispatch, ownProps ->
            onClick = {
                dispatch(ChangeTrueFalseQuestion(ownProps.TrueFalse.first, it))
            }
        }
    )(
            fTrueFalsetEdit
        .unsafeCast<RClass<TrueFalseEditProps>>()
    )
