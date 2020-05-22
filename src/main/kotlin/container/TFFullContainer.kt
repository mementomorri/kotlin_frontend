package container

import component.*
import data.*
import react.*
import redux.*
import react.redux.rConnect


interface TrueFalseFullStateProps : RProps {
    var keyQuestionMap: Map<Int, TrueFalse>
}

interface TrueFalseFullOwnProps : RProps {
    var keyQuestionPair: Pair<Int, TrueFalse>
}

val trueFalseFullContainer =
        rConnect<
                State,
                RAction,
                WrapperAction,
                TrueFalseFullOwnProps,
                TrueFalseFullStateProps,
                RProps,                     //dispatch props
                TrueFalseFullProps>(
                { state, _ ->
                    keyQuestionMap = state.trueFalseQuestions
                },
                { _, _ ->
                }
        )(

                fTrueFalseFull("/TFQuestions")

                        .unsafeCast<RClass<TrueFalseFullProps>>()
        )