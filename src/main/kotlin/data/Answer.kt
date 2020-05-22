package data

data class Answer (
        val possibleAnswer: String,
        val fractionOfAnswer: Double
){
    override fun toString(): String = "$possibleAnswer"
}