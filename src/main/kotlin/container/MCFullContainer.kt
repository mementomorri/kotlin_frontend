package container

import component.*
import data.*
import org.w3c.dom.events.Event
import react.*
import redux.*
import react.redux.rConnect

interface MultipleChoiceFullDispatchProps : RProps {
    var add: (Event) -> Unit
    var remove: (Answer) -> Unit
}

interface MultipleChoiceFullStateProps : RProps {
    var keyQuestionMap: Map<Int, MultipleChoice>
}

interface MultipleChoiceFullOwnProps : RProps {
    var keyQuestionPair: Pair<Int, MultipleChoice>
}

val multipleChoiceFullContainer =
        rConnect<
                State,
                RAction,
                WrapperAction,
                MultipleChoiceFullOwnProps,
                MultipleChoiceFullStateProps,
                MultipleChoiceFullDispatchProps,
                MultipleChoiceFullProps>(
                { state, _ ->
                    keyQuestionMap = state.multipleChoiceQuestions
                },
                { _, _ ->
                }
        )(

                fMultipleChoiceFull("/MCQuestions")

                        .unsafeCast<RClass<MultipleChoiceFullProps>>()
        )