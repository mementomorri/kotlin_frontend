package container

import component.*
import data.*
import org.w3c.dom.events.Event
import react.*
import react.redux.rConnect
import redux.*

interface AnyListDispatchProps : RProps {
    var add: (Event) -> Unit
    var remove: (Int) -> Unit
}

interface AnyListStateProps<O> : RProps {
    var objs: Map<Int, O>
}

val trueFalseListHOC =
    rConnect<
            State,
            RAction,
            WrapperAction,
            RProps,                         // Own Props
            AnyListStateProps<TrueFalse>,
            AnyListDispatchProps,
            AnyListProps<TrueFalse>
            >(
        mapStateToProps = { state, _ ->
            objs = state.trueFalseQuestions
        },
        mapDispatchToProps = { dispatch, _ ->
            add = { dispatch(AddTrueFalseQuestion(TrueFalse("new true/false question", Pair("True","False"),0))) }
            remove = { dispatch(RemoveTrueFalseQuestion(it)) }
        }
    )

val trueFalseListRClass =

        fAnyList("True/False questions", "/TFQuestions", RBuilder::trueFalseQuestion)
            .unsafeCast<RClass<AnyListProps<TrueFalse>>>()

val trueFalseListContainer =
    trueFalseListHOC(trueFalseListRClass)

val multipleChoiceListContainer =
    rConnect<
            State,
            RAction,
            WrapperAction,
            RProps,
            AnyListStateProps<MultipleChoice>,
            AnyListDispatchProps,
            AnyListProps<MultipleChoice>
            >(
        { state, _ ->
            objs = state.multipleChoiceQuestions
        },
        { dispatch, _ ->
            add = { dispatch(AddMultipleChoiceQuestion(MultipleChoice("new multiple choice question", arrayOf(Answer("new answer",100.0),Answer("new answer",0.0),Answer("new answer",0.0))))) }
            remove = { dispatch(RemoveMultipleChoice(it)) }
        }
    )(
            fAnyList("Multiple choice questions", "/MCQuestions", RBuilder::multipleChoiceQuestion)
                    .unsafeCast<RClass<AnyListProps<MultipleChoice>>>()
    )
