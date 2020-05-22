package data

data class MultipleChoice(
    val name: String,
    val arrayOfAnswers: Array<Answer>
) {
    override fun toString(): String = name
}

fun MCQuestionsList() = arrayOf(
        MultipleChoice("How many planets are in our solar system?", arrayOf(Answer("8",100.0), Answer("7",0.0), Answer("9",0.0))),
        MultipleChoice( "Which planet is the most closed to the Sun?", arrayOf(Answer("Mercury",100.0),Answer("Venus",0.0), Answer("Earth", 0.0)))
)