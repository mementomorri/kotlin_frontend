package redux

import data.*

fun multipleChoiceReducer(state: multipleChoiceState, action: RAction, newId: Int = -1) =
    when (action) {
        is AddMultipleChoice -> state + (newId to action.MultipleChoice)
        is RemoveMultipleChoice -> state.minus(action.id)
        is ChangeMultipleChoice ->
            state.toMutableMap()
                .apply {
                    this[action.id] = action.newMultipleChoice
                }
        else -> state
    }

fun trueFalseReducer(state: trueFalseState, action: RAction, newId: Int = -1) =
    when (action) {
        is AddTrueFalseQuestion -> state + (newId to action.TrueFalse)
        is RemoveTrueFalseQuestion -> state.minus(action.id)
        is ChangeTrueFalseQuestion ->
            state.toMutableMap()
                .apply {
                    this[action.id] = action.newTrueFalse
                }
        else -> state
    }

fun rootReducer(state: State, action: RAction) =
    when (action) {
        is AddMultipleChoice -> {
            val id = state.multipleChoiceQuestions.newId()
            State(
                multipleChoiceReducer(state.multipleChoiceQuestions, action, id),
                trueFalseReducer(state.trueFalseQuestions, action)
            )
        }
        is AddTrueFalseQuestion -> {
            val id = state.trueFalseQuestions.newId()
            State(
                multipleChoiceReducer(state.multipleChoiceQuestions, action),
                trueFalseReducer(state.trueFalseQuestions, action, id)
            )
        }
        else ->
            State(
                multipleChoiceReducer(state.multipleChoiceQuestions, action),
                trueFalseReducer(state.trueFalseQuestions, action)
            )
    }