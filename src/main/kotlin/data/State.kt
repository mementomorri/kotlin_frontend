package data

typealias multipleChoiceState = Map<Int, MultipleChoice>

typealias trueFalseState = Map<Int, TrueFalse>

class State(
        val multipleChoiceQuestions: multipleChoiceState,
        val trueFalseQuestions: trueFalseState
)

fun <T> Map<Int, T>.newId() =
    (this.maxBy { it.key }?.key ?: 0) + 1

fun initialState() =
    State(
        MCQuestionsList().mapIndexed { index, MCQuestion ->
            index to MCQuestion
        }.toMap(),
        TFQuestionsList().mapIndexed { index, TFQuestion ->
            index to TFQuestion
        }.toMap()
    )
