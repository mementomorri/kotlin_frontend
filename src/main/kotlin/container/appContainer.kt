package container

import react.*
import react.redux.rConnect
import component.*
import data.*

val appContainer =
    rConnect<State, RProps, AppProps>(
        { state, _ ->
            multipleChoiceQuestions = state.multipleChoiceQuestions
            trueFalseQuestions = state.trueFalseQuestions
        },
        {
            pure = false  // side effect of React Route
        }
    )(

            fApp()
                    .unsafeCast<RClass<AppProps>>()
    )