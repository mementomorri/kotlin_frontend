package components

import data.*
import fstudentList
import org.w3c.dom.events.Event
import react.*
import react.dom.*

interface RLessonProps : RProps {
    var students :Array<Student>
    var lesson : String
}

interface RStudentListState :RState{
    var present: Array<Boolean>
}

class RLesson : RComponent<RLessonProps, RStudentListState>(){
    override fun componentWillMount() {
        state.apply {
            present = Array(props.students.size){false}
        }
    }
    override fun RBuilder.render() {
        h2 { +props.lesson }
        fstudentList(props.students,state.present, onIndex())

    }
    fun RBuilder.onIndex(): (Int) -> (Event) -> Unit = {
        onClick(it)
    }
    fun RBuilder.onClick(index: Int) :(Event) -> Unit = {
        setState {
            present[index] = !present[index]
        }
    }
}
fun RBuilder.Lesson(
    students: Array<Student>,
    lesson:String
) = child(RLesson::class){
        attrs.students = students
        attrs.lesson=lesson
    }