package redux

import data.Lesson
import data.Student
import org.w3c.dom.events.Event

class ChangePresent(val lesson: Int, val student: Int) : RAction
class addLesson (val click:Event):RAction
class addStudent (val click: Event):RAction
class removeLesson (val indexOfLesson: Int):RAction
class removeStudent(val indexOfStudent:Int):RAction
class editLesson(val lesson: Lesson):RAction
class editStudent(val student: Student):RAction
