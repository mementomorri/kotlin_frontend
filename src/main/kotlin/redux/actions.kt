package redux

import data.*

class AddTrueFalseQuestion(val TrueFalse: TrueFalse) : RAction

class RemoveTrueFalseQuestion(val id: Int) : RAction

class ChangeTrueFalseQuestion(val id: Int, val newTrueFalse: TrueFalse) : RAction

class AddMultipleChoiceQuestion(val MultipleChoice: MultipleChoice) : RAction

class RemoveMultipleChoice(val id: Int) : RAction

class ChangeMultipleChoice(val id: Int, val newMultipleChoice: MultipleChoice) : RAction