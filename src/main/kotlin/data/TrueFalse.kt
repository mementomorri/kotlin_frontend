package data

data class TrueFalse(
        val name: String,
        val answers: Pair<String,String>,
        val correctAnswer: Int
) {
    override fun toString(): String =
        "$name"
}

fun TFQuestionsList() =
    arrayOf(
        TrueFalse("Sun is the most heavy component in our solar system.", Pair("True","False"),0),
        TrueFalse("Neptune is the outermost planet in our solar system.", Pair("True","False"),0)
    )